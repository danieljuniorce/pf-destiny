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
import { FaTimes, FaEye, FaEdit } from "react-icons/fa/index";
import api from "../../api";
import { getToken } from "../../auth";

class File extends Component {
  state = {
    boletim: "inline",
    inquerito: "none",
    mandado: "none",
    boletimActive: "#05050A",
    inqueritoActive: "#101021",
    mandadoActive: "#101021",
    boletims: [],
  };

  handleButton(type) {
    if (type === "boletim") {
      return this.setState({
        boletim: "inline",
        inquerito: "none",
        mandado: "none",
        boletimActive: "#05050A",
        inqueritoActive: "#101021",
        mandadoActive: "#101021",
      });
    }
    if (type === "inquerito") {
      return this.setState({
        boletim: "none",
        inquerito: "inline",
        mandado: "none",
        boletimActive: "#101021",
        inqueritoActive: "#05050A",
        mandadoActive: "#101021",
      });
    }
    if (type === "mandado") {
      return this.setState({
        boletim: "none",
        inquerito: "none",
        mandado: "inline",
        boletimActive: "#101021",
        inqueritoActive: "#101021",
        mandadoActive: "#05050A",
      });
    }
  }

  async componentWillMount() {
    try {
      const response = await api.get("/boletim", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      this.setState({ boletims: response.data });
    } catch (e) {}
  }

  render() {
    const {
      boletim,
      inquerito,
      mandado,
      boletimActive,
      inqueritoActive,
      mandadoActive,
    } = this.state;

    return (
      <>
        <Navbar />
        <Container>
          <Painel>
            <PainelTitle>
              <FirstTitlePainel>Gestão de Arquivos</FirstTitlePainel>
              <SecondTitlePainel>Solicitante</SecondTitlePainel>
            </PainelTitle>

            <Files>
              <Menu>
                <TitleNameGroup>Menu</TitleNameGroup>

                <Menus>
                  <MenuItem>
                    <MenuButton
                      type="button"
                      onClick={() => this.handleButton("boletim")}
                      style={{ background: boletimActive }}
                    >
                      Boletim de Ocorrências
                    </MenuButton>
                  </MenuItem>
                  <MenuItem style={{ display: "none" }}>
                    <MenuButton
                      type="button"
                      onClick={() => this.handleButton("inquerito")}
                      style={{ background: inqueritoActive }}
                    >
                      Inqueritos
                    </MenuButton>
                  </MenuItem>
                  <MenuItem style={{ display: "none" }}>
                    <MenuButton
                      type="button"
                      onClick={() => this.handleButton("mandado")}
                      style={{ background: mandadoActive }}
                    >
                      Mandados
                    </MenuButton>
                  </MenuItem>
                </Menus>
              </Menu>

              <StructTable style={{ display: boletim }}>
                <NameGroup>
                  <TitleNameGroup>Boletins de Ocorrência</TitleNameGroup>
                  <ButtonNameGroup to="/arquivos/boletim">
                    Nova Ocorrência
                  </ButtonNameGroup>
                </NameGroup>
                <Table>
                  <TableHead>
                    <TableTr>
                      <TableTh>Nº</TableTh>
                      <TableTh>Emitido por</TableTh>
                      <TableTh>Criado</TableTh>
                      <TableTh>Situação</TableTh>
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    {this.state.boletims.length === 0 ? (
                      <InfoBoletimExist>
                        Sem Boletim cadastrado!
                      </InfoBoletimExist>
                    ) : (
                      this.state.boletims.map((data) => (
                        <TableTr key={data.number}>
                          <TableTd>{data.number}</TableTd>
                          <TableTd>{data.name}</TableTd>
                          <TableTd>{data.comunication}</TableTd>
                          <TableTd>
                            {data.situation === "analyze"
                              ? "Analise"
                              : "Concluido"}
                          </TableTd>
                          <TableTd>
                            <Buttons>
                              <Button
                                background="blue"
                                to={`/documentos/boletim/${data.number}`}
                              >
                                <FaEye size={15} />
                              </Button>
                              <Button
                                background="green"
                                to={`/edit/boletim/${data.number}`}
                              >
                                <FaEdit size={15} />
                              </Button>
                              <Button background="red" to="/">
                                <FaTimes size={15} />
                              </Button>
                            </Buttons>
                          </TableTd>
                        </TableTr>
                      ))
                    )}
                  </TableBody>
                </Table>
              </StructTable>

              <StructTable style={{ display: inquerito }}>
                <NameGroup>
                  <TitleNameGroup>Inqueritos</TitleNameGroup>
                  <ButtonNameGroup to="/arquivos/inquerito">
                    Novo Inquerito
                  </ButtonNameGroup>
                </NameGroup>
                <Table>
                  <TableHead>
                    <TableTr>
                      <TableTh>Nº</TableTh>
                      <TableTh>Emitido por</TableTh>
                      <TableTh>Criado</TableTh>
                      <TableTh>Situação</TableTh>
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    <TableTr>
                      <TableTd>1</TableTd>
                      <TableTd>Daniel Souza</TableTd>
                      <TableTd>13/11/2020 06:56</TableTd>
                      <TableTd>Analise</TableTd>
                      <TableTd>
                        <Buttons>
                          <Button
                            background="blue"
                            to="/documentos/inquerito/1232342"
                          >
                            <FaEye size={15} />
                          </Button>
                          <Button
                            background="green"
                            to="/edit/inquerito/12313123"
                          >
                            <FaEdit size={15} />
                          </Button>
                          <Button background="red" to="/">
                            <FaTimes size={15} />
                          </Button>
                        </Buttons>
                      </TableTd>
                    </TableTr>
                  </TableBody>
                </Table>
              </StructTable>

              <StructTable style={{ display: mandado }}>
                <NameGroup>
                  <TitleNameGroup>Mandados</TitleNameGroup>
                  <ButtonNameGroup to="/arquivos/mandado">
                    Novo Mandado
                  </ButtonNameGroup>
                </NameGroup>
                <Table>
                  <TableHead>
                    <TableTr>
                      <TableTh>Nº</TableTh>
                      <TableTh>Emitido por</TableTh>
                      <TableTh>Criado</TableTh>
                      <TableTh>Situação</TableTh>
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    <TableTr>
                      <TableTd>1</TableTd>
                      <TableTd>Daniel Souza</TableTd>
                      <TableTd>13/11/2020 06:56</TableTd>
                      <TableTd>Analise</TableTd>
                      <TableTd>
                        <Buttons>
                          <Button
                            background="blue"
                            to="/documentos/mandado/1232342"
                          >
                            <FaEye size={15} />
                          </Button>
                          <Button
                            background="green"
                            to="/edit/mandado/12313123"
                          >
                            <FaEdit size={15} />
                          </Button>
                          <Button background="red" to="/">
                            <FaTimes size={15} />
                          </Button>
                        </Buttons>
                      </TableTd>
                    </TableTr>
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

export default File;
