import {
  EnvelopeOpenIcon,
  InstagramLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Flex, Link } from "@radix-ui/themes";

export default function Contact() {
  return (
    <Flex
      id="contato"
      style={{
        maxWidth: "100%",
        margin: "auto",
        padding: "2em",
        background: "var(--blue-12)",
      }}
      direction={"row"}
      justify={"center"}
      align={"center"}
      wrap={"wrap"}
      gap={"6"}
    >
      <Flex gap={"1"} align={"center"}>
        <InstagramLogoIcon width={20} height={20} style={{ color: "white" }} />
        <Link
          style={{ color: "white", cursor: "pointer" }}
          href="https://www.instagram.com/mitsunakaengenharia"
          target="_blank"
        >
          @mitsunakaengenharia
        </Link>
      </Flex>

      <Flex gap={"1"} align={"center"}>
        <MobileIcon width={20} height={20} style={{ color: "white" }} />
        <p style={{ color: "white", margin: 0 }}>(11) 92531-9217</p>
      </Flex>

      <Flex gap={"1"} align={"center"}>
        <EnvelopeOpenIcon width={20} height={20} style={{ color: "white" }} />
        <p style={{ color: "white", margin: 0 }}>contato@mitsunakaengenharia.com</p>
      </Flex>
    </Flex>
  );
}