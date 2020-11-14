import React from "react";
import {
  Container,
  View,
  ButtonReturn,
  Return,
  TitleImg,
  Title,
  Header,
  Img,
  TitleComplementare,
  TitleName,
  CategoriaName,
  InfoName,
  EmissorName,
  AtosProcesso,
  Processo,
  Provas,
  Solicitante,
  Expedido,
  ProvasImg,
  Delegado,
  Rodape,
} from "./styled";
import { FaArrowLeft } from "react-icons/fa/index";

import logo from "../../../assets/logo.png";

function Boletim(props) {
  return (
    <>
      <Return>
        <ButtonReturn to="/arquivos">
          <FaArrowLeft size={16} color="#0A0B16" />
          &nbsp;&nbsp;&nbsp;Retorna
        </ButtonReturn>
      </Return>
      <Header>
        <TitleImg>
          <Img src={logo} alt="logo alt" />
        </TitleImg>
        <Title>
          <TitleName>Policia Federal do Brasil</TitleName>
          <TitleComplementare>Comarca do Destiny Roleplay</TitleComplementare>
          <TitleComplementare>1º Vara Criminal</TitleComplementare>
        </Title>
      </Header>
      <Container>
        <View>
          <CategoriaName>Informações</CategoriaName>
          <hr style={{ marginBottom: "15px" }} />
          <InfoName>
            <span>Autos:</span> {props.match.params.number}
          </InfoName>
          <InfoName>
            <span>Réu:</span> Gabriel Budag
          </InfoName>
          <InfoName>
            <span>Registro Geral:</span> 239
          </InfoName>
          <InfoName>
            <span>Local de Atuação:</span> Los Santos
          </InfoName>
          <InfoName>
            <span>Inquerito:</span> 2132
          </InfoName>

          <EmissorName>
            Em juízo de expedição do{" "}
            <span>Diretor de Inteligência Policial da Polícia</span> Federal do
            Brasil <span>Daniel Souza</span>, situado no Estado Destiny
            Roleplay, na forma da lei.
          </EmissorName>

          <AtosProcesso>Atos do Processo</AtosProcesso>
          <Processo>
            Manda, que o senhor Agentes e Delegados que participaram do
            cumprimento do mandado de prisão em anexo, sob o nº 00001, expedido
            em relação à Gabriel Budag com Registro Geral 239, nascido no Estado
            Destiny Roleplay, situado na cidade de Los Santos, o civil será
            atuado no código penal com artigos seguintes; Artigo 139, 287 e 331,
            referente as provas anexadas.
          </Processo>

          <Provas>Provas</Provas>
          <ProvasImg></ProvasImg>

          <Expedido>Mandado expedido no dia 14 de novembro de 2020</Expedido>

          <Rodape>
            <Solicitante>
              <span>Escrivão</span>Luketa
            </Solicitante>
            <Delegado>
              <span>Delegado Federal</span>Cabeçona
            </Delegado>
          </Rodape>
        </View>
      </Container>
    </>
  );
}

export default Boletim;
