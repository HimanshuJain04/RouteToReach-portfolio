import {
  ContactUs,
  Footer,
  HeroSection,
  OurServices,
  PreviousWork,
  WhyToChoose,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white bg-[#19191B] flex justify-center">
      <div className="max-w-[90%] w-full flex flex-col gap-28">
        <HeroSection />
        <WhyToChoose />
        <OurServices />
        <PreviousWork />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
