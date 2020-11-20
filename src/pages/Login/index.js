import React, { useState } from "react";
import {
  Container,
  Painel,
  Logo,
  Title,
  RedirectRegister,
  Form,
  Group,
  Input,
  Label,
} from "./styled";
import LoadingSpin from "react-loading-spin";
import {
  login,
  setName,
  setRg,
  setCharge,
  setDistinctive,
  setEquip,
  setId,
} from "../../auth";
import { LinkButton, Alert } from "../../components/global";
import api from "../../api";

import logo from "../../assets/logo.png";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState("#CB4335");
  const [text, setText] = useState("Erro no sistema, informe ao Aspira#6729");

  async function handleInput(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      if (response.data.error === "03") {
        setStatus(true);
        setText("Credencial não está cadastrado.");
        setInfo("#CB4335");

        setTimeout(() => setStatus(false), 3000);

        return;
      } else if (response.data.user.active === 0) {
        setStatus(true);
        setText("Credencial não confirmada.");
        setInfo("#CB4335");
        setPassword("");
        setEmail("Entre em contato com algum responsável");

        setTimeout(() => setStatus(false), 10000);

        return;
      }

      setStatus(true);
      setInfo("#2ECC71");
      setText("Credencial inserida corretamente, aguarde...");

      const {
        id,
        name,
        distinctive,
        equip,
        charge,
        rg,
        active,
      } = response.data.user;

      setRg(rg);
      setId(id);
      setDistinctive(distinctive);
      setName(name);
      setCharge(charge);
      setEquip(equip);

      if (active === 1) {
        return setTimeout(() => {
          setStatus(false);
          login(response.data.token);
          props.history.push("/dashboard");
        }, 3500);
      }
    } catch (e) {
      setPassword("");
      setStatus(true);
      setText("E-mail ou senha incorreto.");
      setInfo("#CB4335");

      setTimeout(() => setStatus(false), 3000);

      return;
    }
  }

  return (
    <Container>
      <Painel>
        <Logo src={logo} alt="logo pf" />

        <Title>Login no SIPFD</Title>
        <Alert
          background="#0A0B16"
          color={info}
          colorBottom={info}
          display={status}
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
          <Group>
            <Label>E-mail</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Group>

          <Group>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Group>
          <LinkButton style={{ width: "150px" }} type="submit">
            Entrar
          </LinkButton>
        </Form>

        <RedirectRegister to="/registrar" style={{ marginBottom: "25px" }}>
          Não é registrado? Clique aqui
        </RedirectRegister>
      </Painel>
    </Container>
  );
}

export default Login;
