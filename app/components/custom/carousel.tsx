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
          src={"/images/coz1.webp"}
          alt="cozinha1"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/coz2.webp"}
          alt="cozinha2"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/quarto1.jpg"}
          alt="quarto1"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/quarto2.jpg"}
          alt="quarto2"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/ban1.jpg"}
          alt="banheiro1"
          width={1920}
          height={800}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/ban2.webp"}
          alt="banheiro2"
          width={1920}
          height={700}
        />
      </SwiperSlide>
    </Swiper>
  );
}
