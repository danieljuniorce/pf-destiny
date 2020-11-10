import React from "react";
import {
  Container,
  PainelConfigurate,
  TitlePainelConfigurate,
  Group,
  Input,
  Label,
  Form,
} from "./styled";
import { TitlePage, LinkButton } from "../../components/global";
import Navbar from "../../components/Navbar";

function Configurate() {
  return (
    <>
      <Navbar />
      <TitlePage style={{ textAlign: "center" }}>Configurações</TitlePage>
      <Container>
        <PainelConfigurate>
          <TitlePainelConfigurate>Trocar Senha</TitlePainelConfigurate>

          <Form>
            <Group>
              <Label>Senha Atual</Label>
              <Input />
            </Group>

            <Group>
              <Label>Nova Senhal</Label>
              <Input />
            </Group>

            <Group>
              <Label>Confirmar a Nova Senha</Label>
              <Input />
            </Group>
          </Form>

          <Group style={{ justifyContent: "center", alignItems: "center" }}>
            <LinkButton style={{ width: "200px", marginTop: "40px" }}>
              Mudar Senha
            </LinkButton>
          </Group>
        </PainelConfigurate>
      </Container>
    </>
  );
}

export default Configurate;
