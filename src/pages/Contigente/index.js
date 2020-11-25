import React, { Component } from "react";

import {
  Container,
  TitleNameGroup,
  SecondTitlePainel,
  FirstTitlePainel,
  PainelTitle,
  Painel,
  Files,
  Menu,
  Menus,
  MenuItem,
  MenuButton,
  TableTh,
  TableTr,
  TableBody,
  TableHead,
  Table,
  TableTd,
  StructTable,
  Buttons,
  Button,
  ButtonNameGroup,
  NameGroup,
  InfoBoletimExist,
} from "./styled";
import Navbar from "../../components/Navbar";
import { FaEye } from "react-icons/fa/index";
import api from "../../api";
import { getToken, getRg } from "../../auth";

class Contigente extends Component {
  state = {
    user: "inline",
    inquerito: "none",
    mandado: "none",
    userActive: "#05050A",
    inqueritoActive: "#101021",
    mandadoActive: "#101021",
    users: [],
  };

  handleButton(type) {
    if (type === "user") {
      return this.setState({
        user: "inline",
        inquerito: "none",
        mandado: "none",
        userActive: "#05050A",
        inqueritoActive: "#101021",
        mandadoActive: "#101021",
      });
    }
  }

  async selectUsers() {
    try {
      const response = await api.post(
        "/user/auth",
        { rg: getRg() },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );

      return this.setState({ users: response.data });
    } catch (e) {
      return this.props.history.push("/arquivos");
    }
  }

  componentDidMount() {
    this.selectUsers();
  }

  render() {
    const { user, userActive, users } = this.state;

    return (
      <>
        <Navbar />
        <Container>
          <Painel>
            <PainelTitle>
              <FirstTitlePainel>Gestão de Pessoas</FirstTitlePainel>
              <SecondTitlePainel>Solicitantes</SecondTitlePainel>
            </PainelTitle>

            <Files>
              <Menu>
                <TitleNameGroup>Menu</TitleNameGroup>

                <Menus>
                  <MenuItem>
                    <MenuButton
                      type="button"
                      onClick={() => this.selectUsers()}
                      style={{ background: userActive }}
                    >
                      Autorização do Contigente
                    </MenuButton>
                  </MenuItem>
                </Menus>
              </Menu>

              <StructTable style={{ display: user }}>
                <NameGroup>
                  <TitleNameGroup>
                    Contigente para Autorizar Entrada
                  </TitleNameGroup>
                  <ButtonNameGroup
                    to="/contigente"
                    onClick={() => this.selectUsers()}
                  >
                    Atualizar
                  </ButtonNameGroup>
                </NameGroup>
                <Table>
                  <TableHead>
                    <TableTr>
                      <TableTh>Nº</TableTh>
                      <TableTh>Solicitante</TableTh>
                      <TableTh>RG</TableTh>
                      <TableTh>E-mail</TableTh>
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    {users.length === 0 ? (
                      <InfoBoletimExist>
                        Sem novo contigente cadastrado!
                      </InfoBoletimExist>
                    ) : (
                      users.map((data) => (
                        <TableTr>
                          <TableTd>{data.id}</TableTd>
                          <TableTd>{data.name}</TableTd>
                          <TableTd>{data.rg}</TableTd>
                          <TableTd>{data.email}</TableTd>
                          <TableTd>
                            <Buttons>
                              <Button
                                background="blue"
                                to={`/documentos/contigente/${data.rg}`}
                              >
                                <FaEye size={15} />
                              </Button>
                            </Buttons>
                          </TableTd>
                        </TableTr>
                      ))
                    )}
                  </TableBody>
                </Table>
              </StructTable>
            </Files>
          </Painel>
        </Container>
      </>
    );
  }
}

export default Contigente;
