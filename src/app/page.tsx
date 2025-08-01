import {
  ContactUs,
  Footer,
  HeroSection,
  Navbar,
  OurServices,
  PreviousWork,
  WhyToChoose,
} from "./components";
import { Testimonials } from "./components/lib/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white bg-[#19191B] flex justify-center">
      <div className="w-full flex flex-col sm:gap-28 gap-20 items-center">
        <Navbar />

        <div className="max-w-[90%] w-full flex flex-col gap-28">
          <HeroSection />
          <WhyToChoose />
          <OurServices />
          <PreviousWork />
          <Testimonials />
        </div>

        <ContactUs />

        <Footer />
      </div>
    </div>
  );
}
