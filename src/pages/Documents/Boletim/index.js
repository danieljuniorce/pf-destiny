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
  AtosProcesso,
  Processo,
  Provas,
  Solicitante,
  Expedido,
  Rodape,
  MandadoTitle,
  InfoNameInline,
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
          <TitleComplementare>
            Ministério da Justiça e Segurança Pública
          </TitleComplementare>
          <TitleComplementare>Superintendência Regional</TitleComplementare>
        </Title>
      </Header>
      <Container>
        <View>
          <MandadoTitle>Boletim de Ocorrência</MandadoTitle>
          <CategoriaName>Dados da Ocorrência</CategoriaName>
          <hr style={{ marginBottom: "15px" }} />
          <InfoName>
            <span>Natureza do Fato:</span> Roubo de Veículo
          </InfoName>
          <InfoNameInline>
            <InfoName>
              <span>Data/Hora da Comunicação</span> 15/11/2020 02:59
            </InfoName>
            <InfoName>
              <span>Data/Hora da Ocorrência</span> 15/11/2020 02:59
            </InfoName>
          </InfoNameInline>

          <InfoNameInline>
            <InfoName>
              <span>Local:</span> Los Santos
            </InfoName>

            <InfoName>
              <span>Complemento:</span> Nada consta
            </InfoName>
          </InfoNameInline>

          <CategoriaName style={{ marginTop: "15px" }}>
            Informações do Declarante
          </CategoriaName>
          <hr style={{ marginBottom: "15px" }} />

          <InfoNameInline>
            <InfoName>
              <span>Nome Completo</span> Daniel Souza
            </InfoName>
            <InfoName>
              <span>Registro Geral (RG)</span> 301
            </InfoName>

            <InfoName>
              <span>Telefone:</span> 232311322
            </InfoName>
          </InfoNameInline>

          <InfoNameInline>
            <InfoName>
              <span>Ocupação:</span> Policial
            </InfoName>
            <InfoName>
              <span>Cidade de Nascimento:</span> Los Santos
            </InfoName>
          </InfoNameInline>

          <AtosProcesso>Objetos Envolvidos</AtosProcesso>
          <Processo style={{ textAlign: "center" }}>
            Fan 125 - Placa 2312344234 - COR Azul
          </Processo>

          <Provas>Histórico</Provas>
          <Processo>
            Próximo a prefeitura, um cara de cor parda, blusa branca e short
            preto, roubou minha moto apontando uma arma na minha cabeça, e foi
            direção a Las Ventura.
          </Processo>

          <Expedido>Emetido no dia 14 de novembro de 2020</Expedido>
          <InfoName style={{ textAlign: "center" }}>
            Código de Controle: <span>213132932932</span>
          </InfoName>

          <Rodape>
            <Solicitante>
              <span>Diretor de Inteligência Policial</span>Daniel Souza
            </Solicitante>
          </Rodape>
        </View>
      </Container>
    </>
  );
}

export default Boletim;
