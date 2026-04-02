import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Container, Flex, Link, Separator } from "@radix-ui/themes";
import { CSSProperties, styled } from "styled-components";

export default function Header() {

  const NavTabText = styled(Link)`
    && {
      font-weight: normal;
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  `;

  const containerStyle: CSSProperties = {
    background: "var(--blue-12)",
    padding: "1rem",
    textAlign: "center",
  };

  return (
      <nav style={{ position: "fixed", top: "0", left: "0", width: "100%", zIndex: "999" }}>
        <Container size="3" style={containerStyle}>
          <Flex direction={"row"} justify={"between"} align={"center"}>
            <NavTabText href="#home">Home</NavTabText>
            <NavTabText href="#quemsomos">Quem Somos</NavTabText>
            <NavTabText href="#servicos">Serviços</NavTabText>
            <NavTabText href="#obrasrealizadas">Obras Realizadas</NavTabText>
            <NavTabText href="#contato">Contato</NavTabText>
            <Separator orientation={"vertical"} size={"2"} />
            <Flex gap={"3"} align={"center"}>
              <InstagramLogoIcon color="white" width={20} height={20} />
              <Link
                style={{ color: "white", cursor: "pointer" }}
                href="https://www.instagram.com/mitsunakaengenharia"
                target="_blank"
              >
                @mitsunakaengenharia
              </Link>
            </Flex>
          </Flex>
        </Container>
      </nav>
  );
}