import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

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
  Rodape,
  MandadoTitle,
  InfoNameInline,
  Button,
  Form,
  Label,
  Select,
  Option,
  Group,
} from "./styled";
import { FaArrowLeft } from "react-icons/fa/index";
import api from "../../../api";
import { getToken, getRg } from "../../../auth";
import logo from "../../../assets/logo.png";

function Contigente(props) {
  const [data, setData] = useState({});
  const [verifyAcl, setVerifyAcl] = useState({});

  const [charge, setCharge] = useState("");
  const [equip, setEquip] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const verify = await api.get(`/user/${getRg()}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      await setVerifyAcl(verify.data[0].acl);

      if (verify.data[0].acl === "admin") {
        const response = await api.get(`/user/${props.match.params.rg}`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });

        return setData(response.data[0]);
      }

      return props.history.push("/arquivos");
    } catch (e) {}
  }, [verifyAcl, props.match, props.history]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (verifyAcl === "admin") {
        await api.put(
          `/user/${data.id}`,
          { charge, equip, active: true },
          { headers: { Authorization: `Bearer ${getToken()}` } }
        );

        return props.history.push("/contigente");
      }
    } catch (e) {}
  }

  async function handleOnDeleteUser() {
    try {
      if (verifyAcl === "admin") {
        await api.delete(`/user/${data.id}`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });

        return props.history.push("/contigente");
      }
    } catch (e) {}
  }

  return (
    <>
      <Return>
        <ButtonReturn to="/contigente">
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
          <MandadoTitle>Informações do Solicitante</MandadoTitle>
          <CategoriaName>Dados</CategoriaName>
          <hr style={{ marginBottom: "15px" }} />

          <InfoNameInline>
            <InfoName>
              <span>ID:</span> {data.id}
            </InfoName>
            <InfoName>
              <span>Nome Completo:</span> {data.name}
            </InfoName>
            <InfoName>
              <span>E-mail:</span> {data.email}
            </InfoName>
          </InfoNameInline>

          <InfoNameInline style={{ marginTop: "60px" }}>
            <InfoName>
              <span>RG</span> {data.rg}
            </InfoName>
            <InfoName>
              <span>Username</span> {data.username}
            </InfoName>
            <InfoName>
              <span>Nº do Distintivo</span> {data.distinctive}
            </InfoName>
          </InfoNameInline>

          <CategoriaName style={{ marginTop: "15px" }}>
            Definições
          </CategoriaName>
          <hr style={{ marginBottom: "15px" }} />

          <Form onSubmit={(e) => handleSubmit(e)}>
            <Group>
              <Label>Cargos</Label>
              <Select
                value={charge}
                onChange={(e) => setCharge(e.target.value)}
              >
                <Option defaultChecked>Escolha o cargo</Option>
                <Option value="Diretor Geral">Diretor Geral</Option>
                <Option value="Diretor Executiva">Diretor Executiva</Option>
                <Option value="Diretor de Administração e Logistica Pessoal">
                  Diretor de Administração e Logistica Pessoal
                </Option>
                <Option value="Diretor de Gestão Pessoal">
                  Diretor de Gestão Pessoal
                </Option>
                <Option value="Diretor de Inteligência Policial">
                  Diretor de Inteligência Policial
                </Option>

                <Option value="Diretoria de Investigação e Combate ao Crime Organizado">
                  Diretoria de Investigação e Combate ao Crime Organizado
                </Option>

                <Option value="Superitêndente">Superitêndente</Option>
                <Option value="Supervisor">Supervisor</Option>
                <Option value="Inspetor">Inspetor</Option>
                <Option value="Delegado Federal">Delegado Federal</Option>
                <Option value="Analista">Analista</Option>
                <Option value="Escrivão">Escrivão</Option>
                <Option value="Perito Criminal">Perito Criminal</Option>
                <Option value="Investigador">Investigador</Option>
                <Option value="Agente Especial">Agente Especial</Option>
                <Option value="Agente de Primeira Classe">
                  Agente de Primeira Classe
                </Option>
                <Option value="Agente de Segunda Classe">
                  Agente de Segunda Classe
                </Option>
                <Option value="Agente de Terceira Classe">
                  Agente de Terceira Classe
                </Option>
              </Select>
            </Group>

            <Group style={{ marginTop: "15px" }}>
              <Label>Equipes</Label>
              <Select value={equip} onChange={(e) => setEquip(e.target.value)}>
                <Option defaultChecked>Escolha a equipe</Option>

                <Option value="Diretoria">Diretoria</Option>
                <Option value="Tráfico de Armas">Tráfico de Armas</Option>
                <Option value="Tráfico de Drogas">Tráfico de Drogas</Option>
                <Option value="Crime Organizado">Crime Organizado</Option>
                <Option value="Lavagem de Dinheiro">Lavagem de Dinheiro</Option>
              </Select>
            </Group>
            <Rodape style={{ marginTop: "60px" }}>
              <Button style={{ background: "#00FF7F" }} type="submit">
                Autorizar Entrada
              </Button>
              <Button
                style={{ marginLeft: "20px" }}
                onClick={() => handleOnDeleteUser()}
              >
                Não Autorizar Entrada
              </Button>
            </Rodape>
          </Form>
        </View>
      </Container>
    </>
  );
}

export default Contigente;
