import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Container
      id="quemsomos"
      size={"3"}
      style={{ background: "teal", padding: "2em" }}
    >
      <Flex
        direction={"row"}
        justify={"center"}
        align={"center"}
        gap={"8"}
        style={{ background: "orange" }}
      >
        <Flex direction={"column"} style={{ maxWidth: "40%" }} gap={"5"}>
          <Heading>Quem Somos</Heading>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
            mi libero. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Proin congue quis sem vel laoreet.
            Donec porta tellus finibus urna tempus blandit. Praesent pretium
            elementum viverra. In eget tellus blandit, bibendum tellus nec,
            pellentesque erat. Ut vitae mattis quam. Phasellus gravida ac nibh
            ut malesuada. Nullam tristique sit amet lorem in tempus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Integer urna nisi, congue nec accumsan et,
            pharetra non erat. In vel ornare quam. Nunc sit amet diam vitae leo
            tempus vulputate. Integer tempus mauris non tincidunt tincidunt.
            Fusce rhoncus ante est, sed malesuada nibh rhoncus a. Phasellus
            ligula magna, tincidunt ac tortor sed, iaculis tincidunt enim. Sed
            molestie lacinia est, eu luctus risus cursus rhoncus. Mauris
            suscipit neque
          </Text>
        </Flex>
        <div style={{ maxWidth: "45%" }}>
          <Image
            src={"https://picsum.photos/400/650?random=2"}
            alt={"Quem Somos"}
            width={400}
            height={650}
          />
        </div>
      </Flex>
    </Container>
  );
}
