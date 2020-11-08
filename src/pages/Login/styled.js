import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 90px;
`;

const Painel = styled.div`
  height: 600px;
  width: 450px;

  background: #f0f0f5;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RedirectRegister = styled(Link)`
  margin-top: 50px;
`;

export { Container, Painel, Logo, Title, RedirectRegister };
