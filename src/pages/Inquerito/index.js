import React from "react";

import Navbar from "../../components/Navbar";
import {
  Container,
  SecondTitlePainel,
  FirstTitlePainel,
  PainelTitle,
  Painel,
  ButtonCreate,
  Form,
  Group,
  GroupInline,
  Input,
  Label,
  TextArea,
  TitleNameGroup,
  Final,
} from "./styled";
import { TitlePage } from "../../components/global";

function Inquerito() {
  return (
    <>
      <Navbar />
      <Container>
        <TitlePage>Inquerito</TitlePage>
        <Painel>
          <PainelTitle>
            <FirstTitlePainel>Novo Inquerito</FirstTitlePainel>
            <SecondTitlePainel>Informações</SecondTitlePainel>
          </PainelTitle>

          <Form>
            <TitleNameGroup>Informações do Agente</TitleNameGroup>

            <GroupInline>
              <Group>
                <Label>Nome do Agente</Label>
                <Input disabled value="Daniel Souza" />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Registro Geral</Label>
                <Input disabled value="301" />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Número do Distintivo</Label>
                <Input disabled value="01" />
              </Group>

              <Group style={{ marginLeft: "10px" }}>
                <Label>Cargo</Label>
                <Input disabled value="Diretor de Inteligência" />
              </Group>
            </GroupInline>

            <TitleNameGroup>Resolve</TitleNameGroup>
            <Group>
              <Label>Corpo do Inquerito</Label>
              <TextArea rows="8"></TextArea>
            </Group>

            <GroupInline>
              <Group>
                <Label>Nome da Operação</Label>
                <Input />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Artigos</Label>
                <Input />
              </Group>
            </GroupInline>
            <Final>
              <ButtonCreate>Novo Inquerito</ButtonCreate>
            </Final>
          </Form>
        </Painel>
      </Container>
    </>
  );
}

export default Inquerito;
