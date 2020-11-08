import styled from "styled-components";

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

export { Container, Logo, Title, ButtonArea, Footer };
