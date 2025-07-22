import Image from "next/image";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <div
      id="home"
      className="w-full grid sm:grid-cols-2 gap-8 justify-between items-center"
    >
      {/* details */}
      <div className="flex flex-col items-start pt-36 gap-6 max-w-lg">
        {/* title */}
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Build Your Digital Empire
        </h1>

        {/* subtitle */}
        <h6 className="text-sm sm:text-base lg:text-lg text-white/70">
          RouteToReach is your one-stop solution for result-driven digital
          marketing. From branding to performance marketing — we grow your
          business, digitally. 🎯 Let us handle the digital, while you focus on
          your vision.
        </h6>

        {/* service button */}
        <Button href="#contact-us">Let’s Grow Together</Button>
      </div>

      {/* image */}
      <div className="w-full relative flex justify-end">
        <div className="w-full aspect-square z-10 relative overflow-hidden">
          <Image src={"/header-img.png"} alt="image" fill className="z-10" />

          <div className="bg-blue-500 rounded-xl w-3/5 border-2 border-white absolute rotate-45 z-[8] aspect-square bottom-0 left-1/2 -translate-x-1/2"></div>
          <div className=" border border-white rounded-xl w-[70%] absolute rotate-45 z-[5] aspect-square bottom-10 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
