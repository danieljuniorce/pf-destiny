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

function Mandado() {
  return (
    <>
      <Navbar />
      <Container>
        <TitlePage>Mandado</TitlePage>
        <Painel>
          <PainelTitle>
            <FirstTitlePainel>Novo Mandado</FirstTitlePainel>
            <SecondTitlePainel>Informações</SecondTitlePainel>
          </PainelTitle>

          <Form>
            <TitleNameGroup>Informações do Mandado</TitleNameGroup>

            <GroupInline>
              <Group>
                <Label>Inquerito</Label>
                <Input disabled value="232312.20001-22" />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Auto</Label>
                <Input disabled value="213232.0001-12" />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Réu</Label>
                <Input value="Gabriel Budag" />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Local de Atuação</Label>
                <Input value="Cidade de Los Santos" />
              </Group>
            </GroupInline>

            <TitleNameGroup>Solicitação</TitleNameGroup>

            <GroupInline>
              <Group>
                <Label>Policial Federal</Label>
                <Input value="Daniel Souza" disabled />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Cargo</Label>
                <Input value="Diretor de Inteligência Policial" disabled />
              </Group>
            </GroupInline>

            <TitleNameGroup>Atos do Processo</TitleNameGroup>

            <Group>
              <Label>Artigos</Label>
              <Input />
            </Group>

            <TitleNameGroup>Provas</TitleNameGroup>

            <Group>
              <TextArea rows="8"></TextArea>
            </Group>

            <Final>
              <ButtonCreate>Novo Mandado</ButtonCreate>
            </Final>
          </Form>
        </Painel>
      </Container>
    </>
  );
}

export default Mandado;
