import React, { useState } from "react";
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
} from "../../components/global";
import { getCharge, getName } from "../../auth";
import Navbar from "../../components/Navbar";
import api from "../../api";
import { getId, getToken, logout } from "../../auth";
import LoadingSpin from "react-loading-spin";

function Boletim(props) {
  const [fact, setFact] = useState("");
  const [comunication, setComunication] = useState("");
  const [local, setLocal] = useState("");
  const [complemente, setComplemente] = useState("");
  const [nameBoletim, setNameBoletim] = useState("");
  const [rg, setRg] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [historic, setHistoric] = useState("");

  const [clock, setClock] = useState(new Date());

  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState("#CB4335");
  const [text, setText] = useState("Erro no sistema, informe ao Aspira#6729");

  async function handleInput(e) {
    e.preventDefault();

    setStatus(true);
    setText("Processando, aguarde...");
    setInfo("#3498DB");

    try {
      const response = await api.post(
        "/boletim",
        {
          fact,
          comunication,
          local,
          complemente,
          nameBoletim,
          rg,
          job,
          phone,
          city,
          description,
          historic,
          occurrence: `${clock.getFullYear()}-${clock.getMonth()}-${clock.getDate()} ${clock.toLocaleTimeString()}`,
          user_id: getId(),
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (response.data.error) {
        setStatus(true);
        setText("Erro na autenticação.");
        setInfo("#CB4335");

        setTimeout(() => setStatus(false), 3000);

        logout();
      }

      setStatus(true);
      setInfo("#2ECC71");
      setText("Cadastrado com sucesso, aguarde...");
      return setTimeout(() => {
        setStatus(false);
        props.history.push("/arquivos");
      }, 3500);
    } catch (e) {
      setStatus(true);
      setText("Erro na autenticação.");
      setInfo("#CB4335");

      setTimeout(() => setStatus(false), 3000);

      logout();
      return props.history.push("/arquivos");
    }
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
          <Title> Boletim</Title>
        </TitlePage>

        <Painel>
          <PainelTitle>
            <FirtInfoTitle>Boletim de Ocorrência</FirtInfoTitle>
            <SecondInfoTitle>Informações</SecondInfoTitle>
          </PainelTitle>

          <Alert
            background="#0A0B16"
            color={info}
            colorBottom={info}
            display={status}
            style={{ width: "700px" }}
          >
            <LoadingSpin
              width="3px"
              duration="2s"
              size="19px"
              primaryColor={info}
            />{" "}
            &nbsp; {text}
          </Alert>
          <Form onSubmit={(e) => handleInput(e)}>
            <TitleNameGroup>Dados da Ocorrência</TitleNameGroup>

            <Group>
              <Label>Natureza do Fato</Label>
              <Input
                type="text"
                value={fact}
                onChange={(e) => setFact(e.target.value)}
                required
              />
            </Group>

            <GroupInline>
              <Group>
                <Label>Data/Hora da Comunicação</Label>
                <Input
                  type="datetime-local"
                  value={`${clock.getFullYear()}-${clock.getMonth()}-${clock.getDate()}T${clock.toLocaleTimeString()}`}
                  required
                  disabled
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Data/Hora da Ocorrência</Label>
                <Input
                  type="datetime-local"
                  value={comunication}
                  onChange={(e) => setComunication(e.target.value)}
                  required
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
                  required
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Complemento</Label>
                <Input
                  type="text"
                  value={complemente}
                  onChange={(e) => setComplemente(e.target.value)}
                  required
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
                required
              />
            </Group>

            <GroupInline>
              <Group>
                <Label>Registro Geral (RG)</Label>
                <Input
                  type="number"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  required
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Trabalho</Label>
                <Input
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  required
                />
              </Group>
            </GroupInline>

            <GroupInline>
              <Group>
                <Label>Telefone</Label>
                <Input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Group>
              <Group style={{ marginLeft: "10px" }}>
                <Label>Cidade de Nascimento</Label>
                <Input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
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
                required
              />
            </Group>

            <Group>
              <Label>Histórico</Label>
              <TextArea
                rows="10"
                value={historic}
                onChange={(e) => setHistoric(e.target.value)}
                required
              />
            </Group>
            <Final>
              <CreateBy>
                {getCharge()}
                <br /> {getName()} |{" "}
                {clock.toLocaleDateString() +
                  " as " +
                  clock.toLocaleTimeString()}
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
