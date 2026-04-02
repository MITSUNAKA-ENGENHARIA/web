import Carousel from "./components/custom/carousel";
import Header from "./components/custom/header";
import AboutUs from "./components/custom/about-us";
import Services from "./components/custom/services";
import Contact from "./components/custom/contact";

export default function Home() {
  return (
    <>
      <Header />
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
          height: "800px",
        }}
      />
      <AboutUs />
      <Services />
      <Contact />
    </>
  );
}
