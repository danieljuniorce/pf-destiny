import React from "react";
import { Container, Painel, Logo, Title, RedirectRegister } from "./styled";

import {
  LinkButton,
  FormHelperTextType,
  FormControlType,
  InputLabelType,
  InputType,
} from "../../components/global";

import logo from "../../assets/logo.png";

function Login() {
  return (
    <Container>
      <Painel>
        <Logo src={logo} alt="logo pf" />

        <Title>Login no SIPFD</Title>

        <FormControlType>
          <InputLabelType>E-mail</InputLabelType>
          <InputType type="email" name="email" required />
          <FormHelperTextType>Insirar o e-mail</FormHelperTextType>
        </FormControlType>

        <FormControlType>
          <InputLabelType>Senha</InputLabelType>
          <InputType type="password" name="password" required />
          <FormHelperTextType>Insirar sua senha</FormHelperTextType>
        </FormControlType>

        <LinkButton to="/dashboard" style={{ width: "170px" }}>
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
