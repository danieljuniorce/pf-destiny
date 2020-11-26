import React from "react";
import {
  Container,
  Logo,
  Title,
  ButtonArea,
  Footer,
  LinkRedirect,
} from "./styled";

import logo from "../../assets/logo.png";

function Home() {
  return (
    <Container>
      <Logo src={logo} alt="logo pf" />
      <Title>Sistema de Informação da Policia Federal do Destiny</Title>

      <ButtonArea>
        <LinkRedirect to="/login">Login</LinkRedirect> -
        <LinkRedirect to="/registrar">Registrar</LinkRedirect>
      </ButtonArea>

      <Footer>
        Não há nenhum envolvimento com o Orgão Público da Policia Federal
      </Footer>
    </Container>
  );
}

export default Home;
