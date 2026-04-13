import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Container id="quemsomos" size={"3"} style={{ padding: "2em" }}>
      <Flex
        direction={"row"}
        justify={"center"}
        align={"center"}
        gap={"8"}
        wrap={"wrap"}
      >
        <Flex
          direction={"column"}
          gap={"5"}
          style={{ flex: "1 1 280px", maxWidth: "520px" }}
        >
          <Heading>Quem Somos</Heading>
          <Text style={{ textAlign: "justify" }}>
            Somos uma empresa especializada em transformar projetos em realidade
            com organização, transparência e excelência em cada detalhe. Atuamos
            com uma equipe de profissionais qualificados e experientes,
            preparados para conduzir cada etapa da obra com precisão,
            responsabilidade e atenção aos mínimos detalhes. Desde o
            planejamento inicial até a entrega final, trabalhamos com processos
            bem definidos, garantindo controle rigoroso de custos, cumprimento
            de prazos e qualidade na execução. Acreditamos que uma obra
            bem-sucedida vai além da construção em si, ela envolve confiança,
            comunicação clara e uma gestão eficiente. Por isso, prezamos por
            manter nossos clientes sempre informados, proporcionando
            previsibilidade e segurança durante todo o processo. Nosso
            compromisso é entregar não apenas um resultado técnico de
            excelência, mas também uma experiência tranquila e organizada.
            Cada projeto é tratado de forma única, respeitando as necessidades,
            expectativas e objetivos de quem confia em nosso trabalho. Mais do
            que construir, buscamos criar soluções sólidas, duradouras e que
            agreguem valor em cada detalhe.
          </Text>
        </Flex>

        <div style={{ flex: "1 1 280px", maxWidth: "400px" }}>
          <Image
            src={"https://picsum.photos/400/650?random=2"}
            alt={"Quem Somos"}
            width={400}
            height={650}
            style={{ borderRadius: "0.5em", width: "100%", height: "auto" }}
          />
        </div>
      </Flex>
    </Container>
  );
}