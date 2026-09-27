import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCta } from "@/components/layout/mobile-cta";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";
import { About } from "@/components/sections/about";
import { Doctors } from "@/components/sections/doctors";
import { Prices } from "@/components/sections/prices";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { Contacts } from "@/components/sections/contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <Why />
        <About />
        <Doctors />
        <Prices />
        <Reviews />
        <Faq />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
