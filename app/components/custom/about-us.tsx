import { Container, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";

const pStyle: React.CSSProperties = {
  color: "#374151",
  fontSize: "0.95rem",
  lineHeight: 1.8,
  margin: 0,
  textAlign: "justify",
};

export default function AboutUs() {
  return (
    <Container id="quemsomos" size={"3"} style={{ padding: "2em" }}>
      <Flex
        direction={"row"}
        justify={"center"}
        align={"center"}
        gap={"8"}
        wrap={"wrap"}
        style={{ alignItems: "center" }}
      >
        <Flex
          direction={"column"}
          gap={"4"}
          style={{ flex: "1 1 280px", maxWidth: "520px" }}
        >
          <Heading size="7" style={{ marginBottom: "0.25rem" }}>
            Quem Somos
          </Heading>

          <div
            style={{
              width: "40px",
              height: "3px",
              background: "linear-gradient(90deg, #3b82f6, #1d4ed8)",
              borderRadius: "999px",
            }}
          />

          <p style={pStyle}>
            Somos uma empresa especializada em transformar projetos em realidade
            com organização, transparência e excelência em cada detalhe.
          </p>

          <p style={pStyle}>
            Atuamos com uma equipe de profissionais qualificados e experientes,
            preparados para conduzir cada etapa da obra com precisão,
            responsabilidade e atenção aos mínimos detalhes. Desde o
            planejamento inicial até a entrega final, trabalhamos com processos
            bem definidos, garantindo controle rigoroso de custos, cumprimento
            de prazos e qualidade na execução.
          </p>

          <p style={pStyle}>
            Acreditamos que uma obra bem-sucedida vai além da construção em si
            — ela envolve confiança, comunicação clara e uma gestão eficiente.
            Por isso, prezamos por manter nossos clientes sempre informados,
            proporcionando previsibilidade e segurança durante todo o processo.
          </p>

          <p style={pStyle}>
            Cada projeto é tratado de forma única, respeitando as necessidades,
            expectativas e objetivos de quem confia em nosso trabalho. Mais do
            que construir, buscamos criar soluções sólidas, duradouras e que
            agreguem valor em cada detalhe.
          </p>
        </Flex>

        <div
          style={{
            flex: "1 1 280px",
            maxWidth: "400px",
            alignSelf: "stretch",
            position: "relative",
            minHeight: "300px",
          }}
        >
          <Image
            src={"/images/img1.jpg"}
            alt={"Quem Somos"}
            fill
            style={{ borderRadius: "0.5em", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </Flex>
    </Container>
  );
}