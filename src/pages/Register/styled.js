import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 90px;
`;

const Painel = styled.div`
  width: 450px;
  padding: 30px;
  margin-top: 60px;
  margin-bottom: 60px;

  background: #07070f;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-right: 2px solid yellow;
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 25px;
  color: #ddd;
`;

const RedirectRegister = styled(Link)`
  margin-top: 50px;
`;

const Form = styled.form`
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
`;

const Group = styled.div`
  display: flex;
  text-align: left;
  width: 100%;

  flex-direction: column;
  margin-bottom: 15px;
`;

const GroupInline = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  justify-content: space-between;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 13pt;

  color: #f7fafc;
`;

const Input = styled.input`
  border: none;

  background: #101021;
  color: #ddd;
  padding: 6px;
  font-size: 15pt;
  width: 350px;

  border-radius: 10px;
  border-left: 4px solid yellow;

  height: 35px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);

  &:before {
    border: 0;
  }

  &:after {
    border: 0;
  }
`;

export {
  Container,
  Painel,
  Logo,
  Title,
  RedirectRegister,
  Form,
  Group,
  GroupInline,
  Input,
  Label,
};
