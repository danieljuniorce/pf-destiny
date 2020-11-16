import React from "react";
import {
  Container,
  Painel,
  Logo,
  Title,
  RedirectRegister,
  Form,
  Group,
  Input,
  Label,
} from "./styled";

import { LinkButton } from "../../components/global";

import logo from "../../assets/logo.png";

function Login(props) {
  return (
    <Container>
      <Painel>
        <Logo src={logo} alt="logo pf" />

        <Title>Cadastrar no SIPFD</Title>

        <Form>
          <Group>
            <Label>Nome Completo</Label>
            <Input />
          </Group>
          <Group>
            <Label>Registro Geral (RG)</Label>
            <Input />
          </Group>

          <Group>
            <Label>Usuário</Label>
            <Input />
          </Group>

          <Group>
            <Label>E-mail</Label>
            <Input />
          </Group>

          <Group>
            <Label>Senha</Label>
            <Input />
          </Group>

          <Group>
            <Label>Confirmar Senha</Label>
            <Input />
          </Group>
        </Form>

        <LinkButton style={{ width: "150px" }} to="/login">
          Cadastrar
        </LinkButton>

        <RedirectRegister to="/login">
          Já é registrado? Faça o login
        </RedirectRegister>
      </Painel>
    </Container>
  );
}

export default Login;
