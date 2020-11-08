import React from "react";
import { Container, Logo, Title, ButtonArea, Footer } from "./styled";
import { LinkButton } from "../../components/global";

import logo from "../../assets/logo.png";

function Home() {
  return (
    <Container>
      <Logo src={logo} alt="logo pf" />
      <Title>Sistema de Informação da Policia Federal do Destiny</Title>

      <ButtonArea>
        <LinkButton to="/login">Login</LinkButton> -
        <LinkButton to="/registrar">Registrar</LinkButton>
      </ButtonArea>

      <Footer>
        Não há nenhum envolvimento com o Orgão Público da Policia Federal
      </Footer>
    </Container>
  );
}

export default Home;
