export function WhyToChoose() {
  return (
    <div className="w-full flex flex-col gap-14">
      {/* title | subtitle */}
      <div className="flex gap-16">
        {/* title */}
        <h1 className="font-bold text-6xl max-w-xl">
          Why RouteToReach Is The Best Choice?
        </h1>

        {/* subtitle */}
        <h6 className="text-xl text-white/70">
          Watch this 1-minute video to know why we’re the right growth partner
          for your brand.
        </h6>
      </div>

      {/* why -- video */}
      <div className="w-full aspect-video bg-white/10"></div>
    </div>
  );
}
