import React from "react";

import {
  Container,
  Painel,
  PainelEsquerdo,
  PainelDireito,
  Logo,
  Title,
  LoginRedirect,
} from "./styled";
import {
  FormControlType,
  FormHelperTextType,
  InputType,
  InputLabelType,
  LinkButton,
} from "../../components/global";

import logo from "../../assets/logo.png";

function Register() {
  return (
    <Container>
      <Painel>
        <PainelEsquerdo>
          <Title>Registro no SIPFD</Title>
          <FormControlType>
            <InputLabelType id="name">Nome</InputLabelType>
            <InputType
              type="text"
              name="name"
              id="name"
              style={{ width: "400px" }}
              required
            />
            <FormHelperTextType>
              Insirar seu Nome e Sobronome.
            </FormHelperTextType>
          </FormControlType>

          <FormControlType>
            <InputLabelType id="id">RG</InputLabelType>
            <InputType
              type="number"
              name="id"
              id="id"
              style={{ width: "400px" }}
              required
            />
            <FormHelperTextType>Insirar seu RG do Destiny.</FormHelperTextType>
          </FormControlType>

          <FormControlType>
            <InputLabelType id="id">Senha</InputLabelType>
            <InputType
              type="password"
              name="password"
              id="password"
              style={{ width: "400px" }}
              required
            />
            <FormHelperTextType>Insirar uma senha secreta.</FormHelperTextType>
          </FormControlType>

          <FormControlType>
            <InputLabelType id="id">Confirmar Senha</InputLabelType>
            <InputType
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              style={{ width: "400px" }}
              required
            />
            <FormHelperTextType>
              Confirmer sua senha secreta.
            </FormHelperTextType>
          </FormControlType>

          <LinkButton to="/login" style={{ width: "160px" }}>
            Registrar
          </LinkButton>

          <LoginRedirect to="/login">
            Já sou Registrado, faça o login.
          </LoginRedirect>
        </PainelEsquerdo>
        <PainelDireito>
          <Logo src={logo} alt="logo pf" />
        </PainelDireito>
      </Painel>
    </Container>
  );
}

export default Register;
