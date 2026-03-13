import { ArrowRightIcon, CheckIcon, HomeIcon, RulerHorizontalIcon } from "@radix-ui/react-icons";
import { Badge, Container, Flex, Text } from "@radix-ui/themes";

export default function Services() {
  return (
    <Container id="servicos" size={"4"} style={{ padding: "2em" }}>
      <Flex direction={"row"} justify={"between"} align={"center"}>
        <Badge color="orange" radius="large">
          <Flex
            direction={"column"}
            gap={"3"}
            align={"center"}
            style={{ padding: "2em" }}
          >
            <HomeIcon width={28} height={28} />
            <Text size={"4"}>Reformas</Text>
            <Text>Residenciais e Comerciais</Text>
          </Flex>
        </Badge>
        <ArrowRightIcon width={24} height={24} />
        <Badge color="blue" radius="large">
          <Flex
            direction={"column"}
            gap={"3"}
            align={"center"}
            style={{ padding: "2em" }}
          >
            <RulerHorizontalIcon width={28} height={28} />
            <Text size={"4"}>Engenharia</Text>
            <Text>com Planejamento e Qualidade</Text>
          </Flex>
        </Badge>
        <ArrowRightIcon width={24} height={24} />
        <Badge color="green" radius="large">
          <Flex
            direction={"column"}
            gap={"3"}
            align={"center"}
            style={{ padding: "2em" }}
          >
            <CheckIcon width={28} height={28} />
            <Text size={"4"}>Compromisso</Text>
            <Text>do Projeto à Execução</Text>
          </Flex>
        </Badge>
      </Flex>
    </Container>
  );
}
