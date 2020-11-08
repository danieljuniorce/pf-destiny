import React from "react";
import { FaUser, FaCopy, FaStickyNote } from "react-icons/fa/index";

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
} from "./styled";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <PainelLeft></PainelLeft>
        <PainelRight>
          <Card color="#fff">
            <StructText>
              <TitleCard>Contigente Cadastrado</TitleCard>
              <ContCard>120</ContCard>
            </StructText>
            <StructIcon>
              <FaUser size={35} style={{ opacity: "0.5" }} />
            </StructIcon>
          </Card>
          <Card color="green">
            <StructText>
              <TitleCard>Boletim de Ocorrência</TitleCard>
              <ContCard>34</ContCard>
            </StructText>
            <StructIcon>
              <FaCopy size={35} style={{ opacity: "0.5" }} />
            </StructIcon>
          </Card>
          <Card color="red">
            <StructText>
              <TitleCard>Mandados em Aberto</TitleCard>
              <ContCard>2</ContCard>
            </StructText>
            <StructIcon>
              <FaStickyNote size={35} style={{ opacity: "0.5" }} />
            </StructIcon>
          </Card>
        </PainelRight>
      </Container>
    </>
  );
}

export default Dashboard;
