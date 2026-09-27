"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/config/site";
import { serviceOptions } from "@/content/services";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_EVENT } from "./service-link";

const timeOptions = ["Любое", "Утром", "Днём", "Вечером"] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Укажите, как к вам обращаться" })
    .max(60, { error: "Слишком длинное имя" }),
  phone: z
    .string()
    .refine((v) => v.replace(/\D/g, "").length === 11, {
      error: "Укажите номер телефона полностью",
    }),
  service: z.string(),
  time: z.enum(timeOptions),
  comment: z.string().max(500, { error: "Не более 500 символов" }),
  consent: z.boolean().refine((v) => v, {
    error: "Нужно согласие на обработку данных",
  }),
});

type FormInput = z.input<typeof schema>;
type FormOutput = z.output<typeof schema>;

const serviceLabels = Object.fromEntries(serviceOptions.map((o) => [o.value, o.label]));

/** Formats input as +7 (XXX) XXX-XX-XX. */
function formatPhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits[0] === "8") digits = "7" + digits.slice(1);
  if (digits[0] !== "7") digits = "7" + digits;
  digits = digits.slice(0, 11);

  const p = digits.slice(1);
  let out = "+7";
  if (p.length > 0) out += ` (${p.slice(0, 3)}`;
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += ` ${p.slice(3, 6)}`;
  if (p.length > 6) out += `-${p.slice(6, 8)}`;
  if (p.length > 8) out += `-${p.slice(8, 10)}`;
  return out;
}

function buildMessage(data: FormOutput) {
  const lines = [
    "Здравствуйте! Хочу записаться на приём в TotalDent.",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
  ];
  if (data.service) lines.push(`Услуга: ${serviceLabels[data.service] ?? data.service}`);
  lines.push(`Удобное время: ${data.time}`);
  if (data.comment.trim()) lines.push(`Комментарий: ${data.comment.trim()}`);
  return lines.join("\n");
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-[0.8rem] text-destructive">
      {message}
    </p>
  );
}

const fieldClass =
  "h-12 rounded-xl border-input bg-ivory px-4 text-[0.95rem] focus-visible:bg-white";

export function BookingForm() {
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      time: "Любое",
      comment: "",
      consent: false,
    },
  });

  // Preselect a service when a service card's "Подробнее" link is clicked.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      if (slug in serviceLabels) setValue("service", slug);
      setSentUrl(null);
    };
    window.addEventListener(SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SERVICE_EVENT, onSelect);
  }, [setValue]);

  /**
   * Opens WhatsApp with a prefilled request — works without a backend.
   * To deliver requests to a CRM / Telegram bot instead, POST `data` to your
   * endpoint here (e.g. a Route Handler at /api/booking).
   */
  const onSubmit = (data: FormOutput) => {
    const url = whatsappLink(buildMessage(data));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {sentUrl ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex min-h-[28rem] flex-col items-center justify-center py-8 text-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-teal-soft text-teal">
              <CheckCircle2 className="size-8" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-navy">
              Почти готово!
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
              Мы открыли WhatsApp с текстом вашей заявки. Нажмите «Отправить» —
              и администратор свяжется с вами, чтобы подтвердить время.
            </p>
            <a
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "xl" }), "mt-8")}
            >
              Открыть WhatsApp ещё раз
            </a>
            <button
              type="button"
              onClick={() => {
                reset();
                setSentUrl(null);
              }}
              className="mt-4 text-sm text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
            >
              Заполнить новую заявку
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                  {...register("name")}
                />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Телефон</Label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={cn(fieldClass, "tabular-nums")}
                      name={field.name}
                      ref={field.ref}
                      value={field.value}
                      onBlur={field.onBlur}
                      onChange={(e) => field.onChange(formatPhone(e.target.value))}
                    />
                  )}
                />
                <FieldError id="phone-error" message={errors.phone?.message} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="service">Услуга</Label>
              <Controller
                control={control}
                name="service"
                render={({ field }) => (
                  <Select
                    items={serviceLabels}
                    value={field.value || null}
                    onValueChange={(v) => field.onChange(v ?? "")}
                  >
                    <SelectTrigger
                      id="service"
                      className="h-12 w-full rounded-xl bg-ivory px-4 text-[0.95rem] data-[size=default]:h-12"
                    >
                      <SelectValue placeholder="Выберите услугу (необязательно)" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl p-1">
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="rounded-lg py-2">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <fieldset className="grid gap-2">
              <legend className="mb-2 text-sm font-medium">Удобное время</legend>
              <Controller
                control={control}
                name="time"
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2" role="radiogroup">
                    {timeOptions.map((option) => {
                      const checked = field.value === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={checked}
                          onClick={() => field.onChange(option)}
                          className={cn(
                            "h-10 rounded-full border px-4 text-sm transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                            checked
                              ? "border-navy bg-navy text-white"
                              : "border-input bg-ivory text-foreground/80 hover:border-navy/40"
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}
              />
            </fieldset>

            <div className="grid gap-2">
              <Label htmlFor="comment">
                Комментарий <span className="font-normal text-muted-foreground">(необязательно)</span>
              </Label>
              <Textarea
                id="comment"
                rows={3}
                placeholder="Опишите, что вас беспокоит"
                aria-invalid={!!errors.comment}
                className="min-h-24 rounded-xl bg-ivory px-4 py-3 text-[0.95rem] focus-visible:bg-white"
                {...register("comment")}
              />
              <FieldError id="comment-error" message={errors.comment?.message} />
            </div>

            <div className="grid gap-2">
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-muted-foreground">
                <input
                  type="checkbox"
                  className="mt-0.5 size-4.5 shrink-0 cursor-pointer rounded accent-[var(--teal)]"
                  aria-invalid={!!errors.consent}
                  {...register("consent")}
                />
                Я согласен(на) на обработку персональных данных для связи со мной по заявке.
              </label>
              <FieldError id="consent-error" message={errors.consent?.message} />
            </div>

            <Button type="submit" size="xl" disabled={isSubmitting} className="group mt-1 w-full">
              Записаться на приём
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <p className="-mt-1 text-center text-xs text-muted-foreground">
              Заявка откроется в WhatsApp — останется нажать «Отправить».
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
