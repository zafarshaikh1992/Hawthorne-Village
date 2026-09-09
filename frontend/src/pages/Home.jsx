import Header from "@/components/site/Header";
import HeroAwesome from "@/components/site/HeroAwesome";
import CallBar from "@/components/site/CallBar";
import IntroNearYou from "@/components/site/IntroNearYou";
import CDCPBand from "@/components/site/CDCPBand";
import ServicesChecklist from "@/components/site/ServicesChecklist";
import WhyChoose from "@/components/site/WhyChoose";
import MeetDentist from "@/components/site/MeetDentist";
import BookingPromo from "@/components/site/BookingPromo";
import Technology from "@/components/site/Technology";
import SocialProof from "@/components/site/SocialProof";
import NewPatientWelcome from "@/components/site/NewPatientWelcome";
import FAQ from "@/components/site/FAQ";
import Insurance from "@/components/site/Insurance";
import Financing from "@/components/site/Financing";
import VisitUs from "@/components/site/VisitUs";
import ParkingNote from "@/components/site/ParkingNote";
import Footer from "@/components/site/Footer";
import StickyActions from "@/components/site/StickyActions";
import JsonLd from "@/components/site/JsonLd";

// Section order mirrors the client's reference flow (kiwidental.ca):
// statement hero → "dentist near you" intro → CDCP → services → story
// sections → booking promo → proof → new patients → posts → FAQ → money
// (insurance/financing) → locations/parking.
export default function Home() {
  return (
    <div data-testid="home-page" className="home-v3 min-h-screen bg-white text-[#1E293B]">
      <JsonLd />
      <Header />
      <main>
        <HeroAwesome />
        <CallBar />
        <IntroNearYou />
        <CDCPBand />
        <ServicesChecklist />
        <WhyChoose />
        <MeetDentist />
        <BookingPromo />
        <Technology />
        <SocialProof />
        <NewPatientWelcome />
        <FAQ />
        <Insurance />
        <Financing />
        <VisitUs />
        <ParkingNote />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
