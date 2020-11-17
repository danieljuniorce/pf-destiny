import React from "react";
import {
  FaUser,
  FaCopy,
  FaStickyNote,
  FaMedal,
  FaBrain,
  FaExclamationCircle,
} from "react-icons/fa/index";

import { TitlePage, TitleReturnPage, Title } from "../../components/global";
import Navbar from "../../components/Navbar";
import {
  Container,
  PainelRight,
  PainelLeft,
  Card,
  TitleCard,
  ContCard,
  StructText,
  StructIcon,
  Cards,
  TextTitleWarning,
  PainelTitleWarning,
  PainelWarning,
  TextTitleWarningActual,
  TextWarningActual,
  WithPostNameAndDate,
  TitleRankCard,
} from "./styled";

function Dashboard() {
  return (
    <>
      <Navbar />
      <TitlePage>
        <TitleReturnPage></TitleReturnPage>
        <Title>Dashboard</Title>
      </TitlePage>
      <Container>
        <PainelLeft></PainelLeft>
        <PainelRight>
          <Cards>
            <Card color="blue">
              <StructText>
                <TitleCard color="blue">Contigente Cadastrado</TitleCard>
                <ContCard>120</ContCard>
              </StructText>
              <StructIcon>
                <FaUser size={35} style={{ opacity: "0.5" }} />
              </StructIcon>
            </Card>
            <Card color="#1CC88A">
              <StructText>
                <TitleCard color="#1CC88A">Boletim de Ocorrência</TitleCard>
                <ContCard>34</ContCard>
              </StructText>
              <StructIcon>
                <FaCopy size={35} style={{ opacity: "0.5" }} />
              </StructIcon>
            </Card>
            <Card color="red">
              <StructText>
                <TitleCard color="red">Mandados em Aberto</TitleCard>
                <ContCard>2</ContCard>
              </StructText>
              <StructIcon>
                <FaStickyNote size={35} style={{ opacity: "0.5" }} />
              </StructIcon>
            </Card>
          </Cards>

          <TitleRankCard>
            <FaBrain size={29} />
            &nbsp;Melhores em sua Categoria
          </TitleRankCard>

          <Cards style={{ marginTop: "20px" }}>
            <Card color="#00ff65">
              <StructText>
                <TitleCard color="#00ff65">Melhor Gestão </TitleCard>
                <ContCard>Daniel Souza</ContCard>
              </StructText>
              <StructIcon>
                <FaMedal size={35} style={{ opacity: "0.5" }} />
              </StructIcon>
            </Card>
            <Card color="#00ff65">
              <StructText>
                <TitleCard color="#00ff65">Melhor Agente</TitleCard>
                <ContCard>Daniel Souza</ContCard>
              </StructText>
              <StructIcon>
                <FaMedal size={35} style={{ opacity: "0.5" }} />
              </StructIcon>
            </Card>
            <Card color="#00ff65">
              <StructText>
                <TitleCard color="#00ff65">Melhor Delegado</TitleCard>
                <ContCard>Daniel Souza</ContCard>
              </StructText>
              <StructIcon>
                <FaMedal size={35} style={{ opacity: "0.5" }} />
              </StructIcon>
            </Card>
          </Cards>
          <PainelWarning>
            <PainelTitleWarning>
              <TextTitleWarning>
                <FaExclamationCircle />
                &nbsp;Quadro de Avisos
              </TextTitleWarning>
            </PainelTitleWarning>

            <TextTitleWarningActual>Novo Aviso</TextTitleWarningActual>

            <TextWarningActual>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. <br />
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
              <WithPostNameAndDate>
                Diretor de Inteligência Policial - 05:33 do Dia 09 de Novembro
                de 2020
              </WithPostNameAndDate>
            </TextWarningActual>
          </PainelWarning>
        </PainelRight>
      </Container>
    </>
  );
}

export default Dashboard;
