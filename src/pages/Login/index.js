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

        <Title>Login no SIPFD</Title>

        <Form>
          <Group>
            <Label>E-mail</Label>
            <Input />
          </Group>

          <Group>
            <Label>Password</Label>
            <Input />
          </Group>
        </Form>

        <LinkButton style={{ width: "150px" }} to="/dashboard">
          Entrar
        </LinkButton>

        <RedirectRegister to="/registrar">
          Não é registrado? Clique aqui
        </RedirectRegister>
      </Painel>
    </Container>
  );
}

export default Login;
