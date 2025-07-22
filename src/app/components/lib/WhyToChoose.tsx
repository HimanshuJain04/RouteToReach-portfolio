"use client";

import { useCallback, useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = ["/ambuj.mp4", "/pranay.mp4"];

export function WhyToChoose() {
  SwiperCore.use([Navigation, Pagination]); // Removed Autoplay

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  // Pause all videos except the one at active index
  const handleSlideChange = useCallback((swiper: SwiperCore) => {
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
  }, []);

  // Intersection Observer to play/pause video when in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Only play if this is the active slide
              if (swiperRef.current && swiperRef.current.activeIndex === idx) {
                video.muted = false;
                video.play();
              }
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(video);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [videoRefs.current.length]);

  // On initial mount, pause all and mute except first video
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
      <div className="flex lg:gap-16 gap-4 lg:flex-row flex-col">
        <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl max-w-xl">
          Why RouteToReach Is The Best Choice?
        </h1>

        <h6 className="lg:text-xl md:text-lg sm:text-base text-sm text-white/70">
          Watch this 1-minute video to know why we’re the right growth partner
          for your brand.
        </h6>
      </div>

      <div className="w-full">
        <Swiper
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => {
            swiperRef.current = swiper;
            handleSlideChange(swiper);
          }}
          className="w-full aspect-video"
        >
          {videos.map((src, idx) => (
            <SwiperSlide key={idx}>
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={src}
                className="w-full aspect-video object-cover"
                loop
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
