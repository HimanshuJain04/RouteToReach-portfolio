import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <div id="header" className="w-full flex justify-between">
      {/* details */}
      <div className="flex flex-col items-start pt-36 gap-6 max-w-lg">
        {/* title */}
        <h1 className="font-bold text-7xl">Build Your Digital Empire</h1>

        {/* subtitle */}
        <h6 className="text-xl text-white/70">
          RouteToReach is your one-stop solution for result-driven digital
          marketing. From branding to performance marketing — we grow your
          business, digitally. 🎯 Let us handle the digital, while you focus on
          your vision.
        </h6>

        {/* service button */}
        <Button
          href="#services"
          rightIcon={<GoArrowUpRight className="text-xl" />}
        >
          Our Service
        </Button>
      </div>

      {/* image */}
      <div className="w-full relative flex justify-end">
        <div className="max-w-[80%] w-full aspect-square relative">
          <Image src={"/header-img.png"} alt="image" fill />
        </div>
      </div>
    </div>
  );
}
