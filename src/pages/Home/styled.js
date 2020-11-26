import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 180px;
`;

const Title = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #fff;
`;

const ButtonArea = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  margin-top: 60px;
  color: #fff;
`;

const LinkRedirect = styled(Link)`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 22px;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  text-align: center;
  & {
    filter: brightness(90%);
  }
`;

export { Container, Logo, Title, ButtonArea, Footer, LinkRedirect };
