"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
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
        delay: 3000,
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
      <SwiperSlide>
        <Image
          src={"https://picsum.photos/1920/800?random=7"}
          alt="alksjdf"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://picsum.photos/1920/800?random=2"}
          alt="alksjdf"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://picsum.photos/1920/800?random=5"}
          alt="alksjdf"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://picsum.photos/1920/800?random=1"}
          alt="alksjdf"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://picsum.photos/1920/800?random=4"}
          alt="alksjdf"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://picsum.photos/1920/800?random=10"}
          alt="alksjdf"
          width={1920}
          height={800}
        />
      </SwiperSlide>
    </Swiper>
  );
}
