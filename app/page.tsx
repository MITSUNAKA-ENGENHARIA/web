import Carousel from "./components/custom/carousel";
import AboutUs from "./components/custom/about-us";
import Services from "./components/custom/services";
import Contact from "./components/custom/contact";

export default function Home() {
  return (
    <>
      <style>{`
        .carousel-wrapper .swiper,
        .carousel-wrapper .swiper-slide {
          height: 400px;
        }
        @media (min-width: 768px) {
          .carousel-wrapper .swiper,
          .carousel-wrapper .swiper-slide {
            height: 600px;
          }
        }
        @media (min-width: 1024px) {
          .carousel-wrapper .swiper,
          .carousel-wrapper .swiper-slide {
            height: 800px;
          }
        }
      `}</style>
      <div className="carousel-wrapper">
        <Carousel
          imagesPaths={[
            "/images/ban1.jpg",
            "/images/ban2.webp",
            "/images/coz1.webp",
            "/images/coz2.webp",
            "/images/quarto1.jpg",
            "/images/quarto2.jpg",
          ]}
          imageDimensions={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <AboutUs />
      <Services />
      <Contact />
    </>
  );
}