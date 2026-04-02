"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  imagesPaths: string[];
  imageDimensions: { width: number | string; height: number | string };
  autoDelay?: number;
}

export default function Carousel({
  imagesPaths,
  imageDimensions,
  autoDelay,
}: Props) {
  return (
    <Swiper
      id="home"
      style={{ marginTop: "64px" }}
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: autoDelay || 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
    >
      {imagesPaths.map((i) => {
        return (
          <SwiperSlide
            style={{ height: imageDimensions.height, position: "relative", width: imageDimensions.width }}
            key={i}
          >
            <Image
              src={i}
              alt={i}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
