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
  Divider,
  Name,
  Status,
  PerfilImg,
  Cargo,
} from "./styled";
import Navbar from "../../components/Navbar";
import { TitlePage } from "../../components/global";
import { Merito, Insignia } from "../../components/insignia";
import { FaMedal } from "react-icons/fa/index";
import perfil from "../../assets/perfil.png";

function Perfil() {
  return (
    <>
      <Navbar />

      <TitlePage>Perfil</TitlePage>

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
                <Input name="name" disabled value="Daniel Souza" />
              </Group>
              <Group>
                <Label>Username</Label>
                <Input disabled value="danieljuniorce" />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>E-mail</Label>
                <Input
                  type="email"
                  disabled
                  value="danieljuniorce@hotmail.com"
                />
              </Group>
              <Group>
                <Label>RG</Label>
                <Input disabled value="301" />
              </Group>
            </GroupInline>

            <Divider />

            <UserInfoText>Atribuições</UserInfoText>

            <GroupInline>
              <Group>
                <Label>Cargo</Label>
                <Input disabled value="Diretor de Inteligência Policial" />
              </Group>
              <Group>
                <Label>Equipe</Label>
                <Input disabled value="Inteligência Policial" />
              </Group>
            </GroupInline>
          </Form>
        </ContentPerfil>

        <InfoPerfil>
          <PerfilImg src={perfil} alt="perfil img" />
          <Status color="green">Online</Status>
          <Name>Daniel Souza</Name>
          <Cargo>Diretor de Inteligência Policial</Cargo>

          <UserInfoText style={{ marginTop: "30px" }}>
            Condecorações
          </UserInfoText>

          <Insignia>
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
