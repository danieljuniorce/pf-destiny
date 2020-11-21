import React from "react";
import {
  Container,
  InfoPerfil,
  ContentPerfil,
  ContentTitlePerfil,
  Title,
  Info,
  Form,
  Label,
  Group,
  GroupInline,
  Input,
  UserInfoText,
  Name,
  Status,
  PerfilImg,
  Cargo,
  NumberDistinctive,
} from "./styled";
import Navbar from "../../components/Navbar";
import { Merito, Insignia } from "../../components/insignia";
import { FaMedal } from "react-icons/fa/index";
import perfil from "../../assets/perfil.png";
import {
  getName,
  getCharge,
  getDistinctive,
  getEquip,
  getRg,
} from "../../auth";

function Perfil() {
  return (
    <>
      <Navbar />

      <Container>
        <ContentPerfil>
          <ContentTitlePerfil>
            <Title>Minha Conta</Title>
            <Info>Dados</Info>
          </ContentTitlePerfil>
          <Form>
            <UserInfoText>Informações Principais</UserInfoText>

            <GroupInline>
              <Group>
                <Label>Nome</Label>
                <Input name="name" disabled value={getName()} />
              </Group>
              <Group>
                <Label>RG</Label>
                <Input disabled value={getRg()} />
              </Group>
            </GroupInline>

            <UserInfoText>Atribuições</UserInfoText>

            <GroupInline>
              <Group>
                <Label>Cargo</Label>
                <Input disabled value={getCharge()} />
              </Group>
              <Group>
                <Label>Equipe</Label>
                <Input disabled value={getEquip()} />
              </Group>
            </GroupInline>
          </Form>
        </ContentPerfil>

        <InfoPerfil>
          <PerfilImg src={perfil} alt="perfil img" />
          <Status color="green">Online</Status>
          <Name>{getName()}</Name>
          <Cargo>{getCharge()}</Cargo>
          <NumberDistinctive>
            Distintivo Nº {getDistinctive()}
          </NumberDistinctive>

          <UserInfoText style={{ marginTop: "30px", display: "none" }}>
            Condecorações
          </UserInfoText>

          <Insignia style={{ display: "none" }}>
            <Merito background="green">
              <FaMedal size={18} />
            </Merito>
            <Merito background="black">
              <FaMedal size={18} />
            </Merito>
          </Insignia>
        </InfoPerfil>
      </Container>
    </>
  );
}

export default Perfil;
