import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #fff;

  display: flex;
  justify-content: center;
`;

const Return = styled.div`
  padding: 30px;
  background: #fff;
  font-size: 16pt;

  display: flex;
  align-items: center;
  overflow-x: unset;
`;

const ButtonReturn = styled(Link)`
  background: #fff;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #ddd;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;

  align-items: center;
`;

const TitleImg = styled.div`
  width: 300px;
`;

const Img = styled.img`
  width: 95px;
  margin-left: 100%;
`;

const Title = styled.div`
  width: 720px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleName = styled.h1``;

const TitleComplementare = styled.h3`
  font-weight: 100;
`;

const MandadoTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const View = styled.div`
  width: 700px;
  margin-top: 40px;
`;

const CategoriaName = styled.h2``;

const InfoName = styled.p`
  font-size: 13.5pt;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-left: 15px;
  margin-right: 15px;
  span {
    font-weight: 600;
  }
`;

const InfoNameInline = styled.p`
  display: flex;
  justify-content: space-between;
`;

const EmissorName = styled.p`
  text-align: right;
  margin-left: 120px;
  margin-top: 30px;
  font-size: 13pt;

  span {
    font-weight: 600;
  }
`;

const AtosProcesso = styled.h3`
  margin-top: 40px;
  padding: 6px;
  margin-left: 30px;
  margin-right: 30px;

  text-align: center;
  border: 1px solid black;
`;

const Processo = styled.p`
  margin-top: 25px;
  margin-left: 15px;
  text-align: justify;
  text-justify: inter-word;
  text-indent: 30px;
  font-size: 13pt;
`;

const Provas = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 16.5pt;
  font-weight: 600;
`;

const ProvasImg = styled.p`
  margin: 15px;
  text-align: center;
`;

const Expedido = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 14pt;
`;

const Rodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
  margin-bottom: 40px;

  margin-left: 60px;
  margin-right: 60px;
`;

const Solicitante = styled.p`
  font-size: 14pt;
  display: flex;
  flex-direction: column;

  text-align: center;
  span {
    font-weight: 600;
  }
`;

const Delegado = styled.p`
  font-size: 14pt;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    font-weight: 600;
  }
`;

const Button = styled.button`
  width: 200px;
  background: #ca1d3a;
  text-align: center;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  height: 50px;
  line-height: 50px;
  margin: 0;
  font-size: 15pt;
  border: 0;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
`;

const Form = styled.form``;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-right: 60px;
`;

const Label = styled.label`
  font-size: 15pt;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 15px;
  font-size: 13.5pt;
  border-radius: 10px;

  &:after {
    padding: 15px;
    font-size: 13.5pt;
  }
`;

const Option = styled.option``;

export {
  Container,
  View,
  Return,
  ButtonReturn,
  Img,
  Header,
  Title,
  TitleImg,
  TitleName,
  TitleComplementare,
  CategoriaName,
  InfoName,
  EmissorName,
  AtosProcesso,
  Processo,
  Provas,
  ProvasImg,
  Expedido,
  Solicitante,
  Delegado,
  Rodape,
  MandadoTitle,
  InfoNameInline,
  Button,
  Form,
  Group,
  Label,
  Select,
  Option,
};
