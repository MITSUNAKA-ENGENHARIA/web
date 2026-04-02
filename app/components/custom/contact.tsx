import { EnvelopeOpenIcon, InstagramLogoIcon, MobileIcon } from "@radix-ui/react-icons";
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
        gap: "30em",
      }}
      direction={"row"}
      justify={"center"}
    >
      <Flex gap={"3"} align={"center"}>
        <InstagramLogoIcon width={20} height={20} style={{ color: "white" }} />
        <Link
          style={{ color: "white", cursor: "pointer" }}
          href="https://www.instagram.com/mitsunakaengenharia"
          target="_blank"
        >
          @mitsunakaengenharia
        </Link>
      </Flex>
      <Flex gap={"3"} align={"center"}>
        <MobileIcon width={20} height={20} style={{ color: "white" }} />
        <p style={{ color: "white" }}>(11) 92531-9217</p>
      </Flex>
      <Flex gap={"3"} align={"center"}>
        <EnvelopeOpenIcon width={20} height={20} style={{ color: "white" }} />
        <p style={{ color: "white" }}>contato@mitsunakaengenharia.com</p>
      </Flex>
    </Flex>
  );
}
