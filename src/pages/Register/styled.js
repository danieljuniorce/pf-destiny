import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Painel = styled.div`
  width: 100%;
  max-width: 1020px;
  height: 100%;
  max-height: 500px;
  background: #f0f0f5;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PainelEsquerdo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PainelDireito = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 15px;
`;

const Logo = styled.img`
  width: 300px;
`;

const LoginRedirect = styled(Link)`
  margin-top: 30px;
`;

export {
  Container,
  Painel,
  PainelEsquerdo,
  PainelDireito,
  Logo,
  Title,
  LoginRedirect,
};
