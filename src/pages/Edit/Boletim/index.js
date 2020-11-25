/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa/index";

import {
  Container,
  SecondInfoTitle,
  FirtInfoTitle,
  PainelTitle,
  Painel,
  TitleNameGroup,
  Form,
  Group,
  GroupInline,
  Label,
  Input,
  TextArea,
  ButtonCreate,
  Final,
  CreateBy,
} from "./styled";
import {
  TitlePage,
  TitleReturnPage,
  Title,
  Alert,
} from "../../../components/global";
import LoadingSpin from "react-loading-spin";
import api from "../../../api";
import { getToken } from "../../../auth";
import Navbar from "../../../components/Navbar";

function Boletim(props) {
  const [data, setData] = useState({});

  const [fact, setFact] = useState("");
  const [comunication, setComunication] = useState("");
  const [occurrence, setOccurrence] = useState("");
  const [local, setLocal] = useState("");
  const [complemente, setComplemente] = useState("");
  const [nameBoletim, setNameBoletim] = useState("");
  const [rg, setRg] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [historic, setHistoric] = useState("");

  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState("#CB4335");
  const [text, setText] = useState("Erro no sistema, informe ao Aspira#6729");

  useEffect(async () => {
    try {
      const response = await api.get(`/boletim/${props.match.params.number}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      setFact(response.data.fact);
      setComunication(response.data.comunication);
      setOccurrence(response.data.occurrence);
      setLocal(response.data.local);
      setComplemente(response.data.complemente);
      setNameBoletim(response.data.nameBoletim);
      setRg(response.data.rg);
      setJob(response.data.job);
      setPhone(response.data.phone);
      setCity(response.data.city);
      setData(response.data);
      setDescription(response.data.description);
      setHistoric(response.data.historic);
    } catch (e) {}
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(
        `/boletim/${props.match.params.number}`,
        { complemente, job, phone, city, description, historic },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );

      setStatus(true);
      setInfo("#2ECC71");
      setText("Editado com sucesso, voltando aos arquivos.");
      return setTimeout(() => {
        setStatus(false);
        props.history.push("/arquivos");
      }, 3500);
    } catch (e) {}
  }

  return (
    <>
      <Navbar />

      <Container>
        <TitlePage>
          <TitleReturnPage to="/arquivos">
            <FaArrowLeft size={19} />
            &nbsp;Retorna
          </TitleReturnPage>
          <Title> Editar Ocorrência</Title>
        </TitlePage>

        <Painel>
          <PainelTitle>
            <FirtInfoTitle>Boletim de Ocorrência</FirtInfoTitle>
            <SecondInfoTitle>Nº {data.number}</SecondInfoTitle>
          </PainelTitle>

          <Form onSubmit={(e) => handleSubmit(e)}>
            <TitleNameGroup>Dados da Ocorrência</TitleNameGroup>

            <Group>
              <Label>Natureza do Fato</Label>
              <Input
                type="text"
                value={fact}
                onChange={(e) => setFact(e.target.value)}
                disabled
              />
            </Group>

            <GroupInline>
              <Group>
                <Label>Hora da Comunicação</Label>
                <Input
                  type="datetime-local"
                  value={comunication}
                  onChange={(e) => setComunication(e.target.value)}
                  disabled
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Hora da Ocorrência</Label>
                <Input
                  type="datetime-local"
                  value={occurrence}
                  onChange={(e) => setOccurrence(e.target.value)}
                  disabled
                />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Local</Label>
                <Input
                  type="text"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                  disabled
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Complemento</Label>
                <Input
                  type="text"
                  value={complemente}
                  onChange={(e) => setComplemente(e.target.value)}
                />
              </Group>
            </GroupInline>

            <TitleNameGroup>Informações do Declarante</TitleNameGroup>

            <Group>
              <Label>Nome Completo</Label>
              <Input
                type="text"
                value={nameBoletim}
                onChange={(e) => setNameBoletim(e.target.value)}
                disabled
              />
            </Group>

            <GroupInline>
              <Group>
                <Label>Registro Geral (RG)</Label>
                <Input
                  type="text"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  disabled
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Trabalho</Label>
                <Input
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Telefone</Label>
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Cidade de Nascimento</Label>
                <Input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Group>
            </GroupInline>

            <TitleNameGroup>Objetos Envolvidos</TitleNameGroup>

            <Group>
              <Label>Descrição do Objeto</Label>
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Group>

            <Group>
              <Label>Histórico</Label>
              <TextArea
                rows="10"
                value={historic}
                onChange={(e) => setHistoric(e.target.value)}
              />
            </Group>

            <Alert
              background="#0A0B16"
              color={info}
              colorBottom={info}
              display={status}
              style={{ width: "670px" }}
            >
              <LoadingSpin
                width="3px"
                duration="2s"
                size="19px"
                primaryColor={info}
              />{" "}
              &nbsp; {text}
            </Alert>

            <Final>
              <CreateBy>
                Criado por {data.name} <br /> {data.charge} |{" "}
                {data.comunicationModified}
              </CreateBy>
              <ButtonCreate type="submit">Cadastra Ocorrência</ButtonCreate>
            </Final>
          </Form>
        </Painel>
      </Container>
    </>
  );
}

export default Boletim;
