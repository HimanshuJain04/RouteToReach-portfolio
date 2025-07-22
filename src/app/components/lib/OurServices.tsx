import { hexToRgba } from "@/app/utils";
import { SERVICES } from "./services";

export function OurServices() {
  return (
    <div
      id="services"
      className="w-full flex flex-col items-center-center gap-14"
    >
      {/* title */}
      <div className="w-full flex justify-center">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold max-w-2xl">
          The Service We Provide For You
        </h1>
      </div>

      {/* services */}
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-24">
        {SERVICES.map((data, idx) => (
          <div key={idx} className="flex w-full justify-center">
            <div className="max-w-80 w-full items-center flex flex-col gap-4">
              {/* icon */}
              <div
                style={{ backgroundColor: hexToRgba(data.color) }}
                className="rounded-full md:p-4 p-3"
              >
                <span
                  style={{ color: data.color }}
                  className="md:text-3xl sm:text-xl text-lg"
                >
                  {data.icon}
                </span>
              </div>

              {/* title */}
              <h6 className="font-semibold md:text-2xl text-xl text-center">
                {data.title}
              </h6>

              {/* subtitle */}
              <p className="text-center md:text-xl sm:text-base text-sm text-white/70">
                {data.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
