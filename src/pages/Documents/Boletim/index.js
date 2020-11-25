import React, { useEffect, useState } from "react";
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
import api from "../../../api";
import { getToken } from "../../../auth";
import logo from "../../../assets/logo.png";

function Boletim(props) {
  const [data, setData] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const response = await api.get(`/boletim/${props.match.params.number}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      setData(response.data);
    } catch (e) {}
  }, [props.match.params.number]);

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
            <span>Natureza do Fato:</span> {data.fact}
          </InfoName>
          <InfoNameInline>
            <InfoName>
              <span>Data/Hora da Comunicação</span> {data.comunication}
            </InfoName>
            <InfoName>
              <span>Data/Hora da Ocorrência</span> {data.occurrence}
            </InfoName>
          </InfoNameInline>

          <InfoNameInline>
            <InfoName>
              <span>Local:</span> {data.local}
            </InfoName>

            <InfoName>
              <span>Complemento:</span> {data.complemente}
            </InfoName>
          </InfoNameInline>

          <CategoriaName style={{ marginTop: "15px" }}>
            Informações do Declarante
          </CategoriaName>
          <hr style={{ marginBottom: "15px" }} />

          <InfoNameInline>
            <InfoName>
              <span>Nome Completo</span> {data.nameBoletim}
            </InfoName>
            <InfoName>
              <span>Registro Geral (RG)</span> {data.rg}
            </InfoName>

            <InfoName>
              <span>Telefone:</span> {data.phone}
            </InfoName>
          </InfoNameInline>

          <InfoNameInline>
            <InfoName>
              <span>Ocupação:</span> {data.job}
            </InfoName>
            <InfoName>
              <span>Cidade de Nascimento:</span> {data.city}
            </InfoName>
          </InfoNameInline>

          <AtosProcesso>Objetos Envolvidos</AtosProcesso>
          <Processo style={{ textAlign: "center" }}>
            {data.description}
          </Processo>

          <Provas>Histórico</Provas>
          <Processo>{data.historic}</Processo>

          <Expedido>Emetido no dia {data.emit}</Expedido>
          <InfoName style={{ textAlign: "center" }}>
            Código de Controle: <span>{data.number}</span>
          </InfoName>

          <Rodape>
            <Solicitante>
              <span>{data.charge}</span>
              {data.name}
            </Solicitante>
          </Rodape>
        </View>
      </Container>
    </>
  );
}

export default Boletim;
