import { hexToRgba } from "@/app/utils";
import { SERVICES } from "./services";

export function OurServices() {
  return (
    <div className="w-full flex flex-col items-center-center gap-14">
      {/* title */}
      <div className="w-full flex justify-center">
        <h1 className="text-6xl text-center font-bold max-w-2xl">
          The Service We Provide For You
        </h1>
      </div>

      {/* services */}
      <div className="w-full grid grid-cols-3 gap-x-6 gap-y-24">
        {SERVICES.map((data, idx) => (
          <div key={idx} className="flex w-full justify-center">
            <div className="max-w-80 w-full items-center flex flex-col gap-4">
              {/* icon */}
              <div
                style={{ backgroundColor: hexToRgba(data.color) }}
                className="rounded-full p-4"
              >
                <span style={{ color: data.color }} className="text-3xl">
                  {data.icon}
                </span>
              </div>

              {/* title */}
              <h6 className="font-semibold text-2xl text-center">
                {data.title}
              </h6>

              {/* subtitle */}
              <p className="text-center text-xl text-white/70">
                {data.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
