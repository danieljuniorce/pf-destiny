import React from "react";
import { FaArrowLeft } from "react-icons/fa/index";

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
  CreateBy,
} from "./styled";
import { TitlePage, TitleReturnPage, Title } from "../../components/global";

function Inquerito() {
  return (
    <>
      <Navbar />
      <Container>
        <TitlePage>
          <TitleReturnPage to="/arquivos">
            <FaArrowLeft size={19} />
            &nbsp;Retorna
          </TitleReturnPage>
          <Title>Inquerito</Title>
        </TitlePage>
        <Painel>
          <PainelTitle>
            <FirstTitlePainel>Novo Inquerito</FirstTitlePainel>
            <SecondTitlePainel>Nº 2020320382</SecondTitlePainel>
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
              <CreateBy>DIP Daniel Souza - 17/11/2020 07:31</CreateBy>
              <ButtonCreate>Novo Inquerito</ButtonCreate>
            </Final>
          </Form>
        </Painel>
      </Container>
    </>
  );
}

export default Inquerito;
