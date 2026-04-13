import {
  ArrowRightIcon,
  ArrowDownIcon,
  CheckIcon,
  HomeIcon,
  RulerHorizontalIcon,
} from "@radix-ui/react-icons";
import { Badge, Container, Flex, Text } from "@radix-ui/themes";

export default function Services() {
  return (
    <Container id="servicos" size={"4"} style={{ padding: "2em" }}>
      <Flex
        direction={"row"}
        justify={"between"}
        align={"center"}
        wrap={"wrap"}
        gap={"4"}
        style={{ rowGap: "1.5rem" }}
      >
        <Badge color="orange" radius="large" style={{ flex: "1 1 160px" }}>
          <Flex
            direction={"column"}
            gap={"3"}
            align={"center"}
            style={{ padding: "2em", width: "100%" }}
          >
            <HomeIcon width={28} height={28} />
            <Text size={"4"}>Reformas</Text>
            <Text>Residenciais e Comerciais</Text>
          </Flex>
        </Badge>

        {/* Seta: horizontal em desktop, vertical em mobile */}
        <ArrowRightIcon
          width={24}
          height={24}
          className="services-arrow-h"
        />
        <ArrowDownIcon
          width={24}
          height={24}
          className="services-arrow-v"
        />

        <Badge color="blue" radius="large" style={{ flex: "1 1 160px" }}>
          <Flex
            direction={"column"}
            gap={"3"}
            align={"center"}
            style={{ padding: "2em", width: "100%" }}
          >
            <RulerHorizontalIcon width={28} height={28} />
            <Text size={"4"}>Engenharia</Text>
            <Text>com Planejamento e Qualidade</Text>
          </Flex>
        </Badge>

        <ArrowRightIcon
          width={24}
          height={24}
          className="services-arrow-h"
        />
        <ArrowDownIcon
          width={24}
          height={24}
          className="services-arrow-v"
        />

        <Badge color="green" radius="large" style={{ flex: "1 1 160px" }}>
          <Flex
            direction={"column"}
            gap={"3"}
            align={"center"}
            style={{ padding: "2em", width: "100%" }}
          >
            <CheckIcon width={28} height={28} />
            <Text size={"4"}>Compromisso</Text>
            <Text>do Projeto à Execução</Text>
          </Flex>
        </Badge>
      </Flex>

      <style>{`
        @media (min-width: 640px) {
          .services-arrow-h { display: block; }
          .services-arrow-v { display: none; }
        }
        @media (max-width: 639px) {
          .services-arrow-h { display: none; }
          .services-arrow-v { display: block; }
        }
      `}</style>
    </Container>
  );
}