import React from "react";
import { FaArrowLeft } from "react-icons/fa/index";

import {
  Container,
  SecondInfoTitle,
  FirtInfoTitle,
  PainelTitle,
  Painel,
  TitleNameGroup,
  Form,
  Group,
  GroupInline,
  Label,
  Input,
  TextArea,
  ButtonCreate,
  Final,
  CreateBy,
} from "./styled";
import { TitlePage, TitleReturnPage, Title } from "../../components/global";
import Navbar from "../../components/Navbar";

function Boletim() {
  return (
    <>
      <Navbar />

      <Container>
        <TitlePage>
          <TitleReturnPage to="/arquivos">
            <FaArrowLeft size={19} />
            &nbsp;Retorna
          </TitleReturnPage>
          <Title> Boletim</Title>
        </TitlePage>

        <Painel>
          <PainelTitle>
            <FirtInfoTitle>Boletim de Ocorrência</FirtInfoTitle>
            <SecondInfoTitle>Nº 82913712731</SecondInfoTitle>
          </PainelTitle>

          <Form>
            <TitleNameGroup>Dados da Ocorrência</TitleNameGroup>

            <Group>
              <Label>Natureza do Fato</Label>
              <Input />
            </Group>

            <GroupInline>
              <Group>
                <Label>Hora da Comunicação</Label>
                <Input type="datetime-local" />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Hora da Ocorrência</Label>
                <Input type="datetime-local" />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Local</Label>
                <Input />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Complemento</Label>
                <Input />
              </Group>
            </GroupInline>

            <TitleNameGroup>Informações do Declarante</TitleNameGroup>

            <Group>
              <Label>Nome Completo</Label>
              <Input />
            </Group>

            <GroupInline>
              <Group>
                <Label>Registro Geral (RG)</Label>
                <Input />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Trabalho</Label>
                <Input />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Telefone</Label>
                <Input />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Cidade de Nascimento</Label>
                <Input />
              </Group>
            </GroupInline>

            <TitleNameGroup>Objetos Envolvidos</TitleNameGroup>

            <Group>
              <Label>Descrição do Objeto</Label>
              <Input />
            </Group>

            <Group>
              <Label>Histórico</Label>
              <TextArea rows="10" />
            </Group>
            <Final>
              <CreateBy>DIP Daniel Souza | 17/10/2020 as 07:20</CreateBy>
              <ButtonCreate>Cadastra Ocorrência</ButtonCreate>
            </Final>
          </Form>
        </Painel>
      </Container>
    </>
  );
}

export default Boletim;
