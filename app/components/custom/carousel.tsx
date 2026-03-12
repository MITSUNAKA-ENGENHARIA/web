"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <Swiper
      id="home"
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 1
        }
      }}
    >
      <SwiperSlide>
        <div style={{ background: "red", height: 800 }}>Slide 1</div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ background: "blue", height: 800 }}>Slide 2</div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ background: "green", height: 800 }}>Slide 3</div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ background: "purple", height: 800 }}>Slide 4</div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ background: "orange", height: 800 }}>Slide 5</div>
      </SwiperSlide>
    </Swiper>
  );
}