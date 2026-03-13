import Carousel from "./components/custom/carousel";
import Header from "./components/custom/header";
import AboutUs from "./components/custom/about-us";
import { Badge, Container, Flex, Text } from "@radix-ui/themes";
import { ArrowRightIcon, CheckIcon, HomeIcon, RulerHorizontalIcon } from "@radix-ui/react-icons";
import Services from "./components/custom/services";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutUs />
      <Services />
    </>
  );
}
