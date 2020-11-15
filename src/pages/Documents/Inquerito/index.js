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
  Processo,
  Solicitante,
  Expedido,
  Rodape,
  MandadoTitle,
  Paragrafos,
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
          <MandadoTitle>Inquerito Policial</MandadoTitle>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <InfoName style={{ width: "300px", textAlign: "justify" }}>
              DANIEL SOUZA, Diretor de Inteligência Policial, lotado e em
              exercício nesta SUPERINTENDÊNCIA REGIONAL DE POLÍCIA FEDERAL DE
              DESTINY, em Destiny Roleplay, no uso de suas atribuições legais e
              considerando os Procedimentos Investigatórios Criminais nº
              219923929392/2020-123.
            </InfoName>
          </div>

          <CategoriaName style={{ marginLeft: "60px" }}>RESOLVE</CategoriaName>

          <Processo>
            Instaurar Inquérito Policial para apurar possível ocorrência do
            delito previsto nos artigos 288, 355 e 87 do Código Penal, tendo em
            vista que, segundo investigação criminal interna da polícia federal,
            ocorrem rotas de tráfico internacionalmente entre fronteiras e venda
            indevida conforme a legislação brasileira que pune a tendência de
            tal ato. Os fatos são apurados no âmbito de assim denominada{" "}
            <span>OPERAÇÃO O INÍCIO</span>.
          </Processo>
          <Processo style={{ marginBottom: "30px" }}>
            Atuado esta e os documentos anexados sob o nº 219923929392/2020-123,
            determino as seguintes providências:
          </Processo>

          <Paragrafos>
            1. Carregue-se o feito no SIPFD, sob sigilo nível 3, distribuindo-o
            por dependência aos Autos nº 22392321321312-2310;
          </Paragrafos>
          <Paragrafos>
            2. A fim de se cumprir com eficiência as diligências solicitadas na
            requisição de investigação criminal interna da polícia federal,
            decreto sigilo no feito, no termos do art.20 do CPP. Efetuem-se as
            alterações necessárias no SIPFD;
          </Paragrafos>
          <Paragrafos>
            3. Autorizar e cumprir mandados de busca, apreensão e prisão nos
            endereços e nomes descritos nos autos das provas conforme o artigo
            332 a 443 do Código de Processo Civil.
          </Paragrafos>
          <Paragrafos>
            4. Tendo em vista que, quaisquer alterações que possa determinar o
            fracasso das buscas, apreensões e prisões, entende-se que de acordo
            com o artigo 329 o autor do retardamento seja autuado.
          </Paragrafos>
          <Expedido>Emetido no dia 14 de novembro de 2020</Expedido>

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
