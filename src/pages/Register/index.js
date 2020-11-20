import React, { useState } from "react";
import LoadingSpin from "react-loading-spin";
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

import { LinkButton, Alert } from "../../components/global";
import api from "../../api";
import logo from "../../assets/logo.png";

function Login(props) {
  const [name, setName] = useState("");
  const [rg, setRg] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState("#CB4335");
  const [text, setText] = useState("Erro no sistema, informe ao Aspira#6729");

  async function handleInputs(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user", {
        name,
        rg,
        username,
        email,
        password,
        confirmPassword,
      });

      if (response.data.error === "01") {
        setStatus(true);
        setText("As senhas estão diferentes.");
        setInfo("#CB4335");

        setTimeout(() => setStatus(false), 3000);

        setPassword("");
        setConfirmPassword("");

        return;
      } else if (response.data.error === "02") {
        setStatus(true);
        setText("Usuário já cadastrado.");
        setInfo("#CB4335");
        setRg("");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setTimeout(() => setStatus(false), 3000);

        return;
      }

      setStatus(true);
      setInfo("#2ECC71");
      setText("Cadastrado com sucesso, aguarde...");
      setTimeout(() => {
        setStatus(false);
        props.history.push("/login");
      }, 3500);

      return;
    } catch (e) {
      return;
    }
  }

  return (
    <Container>
      <Painel>
        <Logo src={logo} alt="logo pf" />
        <Title>Cadastrar no SIPFD</Title>
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
        <Form onSubmit={(e) => handleInputs(e)}>
          <Group>
            <Label>Nome Completo</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Group>
          <Group>
            <Label>Registro Geral (RG)</Label>
            <Input
              type="number"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              required
            />
          </Group>

          <Group>
            <Label>Usuário</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Group>

          <Group>
            <Label>E-mail</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Group>

          <Group>
            <Label>Senha</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Group>

          <Group>
            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Group>

          <LinkButton style={{ width: "150px" }} type="submit">
            Cadastrar
          </LinkButton>
        </Form>

        <RedirectRegister to="/login">
          Já é registrado? Faça o login
        </RedirectRegister>
      </Painel>
    </Container>
  );
}

export default Login;
