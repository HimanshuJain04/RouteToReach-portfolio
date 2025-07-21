"use client";

import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = ["/ambuj.mp4", "/pranay.mp4"];

export function WhyToChoose() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause all videos except the one at active index
  const handleSlideChange = (swiper: SwiperCore) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (idx === swiper.activeIndex) {
        video.muted = false;
        video.play();
      } else {
        video.pause();
        video.muted = true;
      }
    });
  };

  // On initial mount, pause all and mute except first video after 2s
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === 0) {
        video.muted = false;
        video.play();
      } else {
        video.pause();
        video.muted = true;
      }
    });
  }, []);

  return (
    <div id="why-to-choose" className="w-full flex flex-col gap-14">
      {/* title | subtitle */}
      <div className="flex gap-16">
        <h1 className="font-bold text-6xl max-w-xl">
          Why RouteToReach Is The Best Choice?
        </h1>

        <h6 className="text-xl text-white/70">
          Watch this 1-minute video to know why we’re the right growth partner
          for your brand.
        </h6>
      </div>

      <div className="w-full">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
          className="w-full aspect-video"
          autoplay
        >
          {videos.map((src, idx) => (
            <SwiperSlide key={idx}>
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={src}
                className="w-full aspect-video object-cover"
                playsInline
                muted
                controls
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
