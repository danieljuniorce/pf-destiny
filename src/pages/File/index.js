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
} from "./styled";
import Navbar from "../../components/Navbar";
import { FaPrint, FaEye, FaEdit } from "react-icons/fa/index";

class File extends Component {
  state = {
    boletim: "inline",
    inquerito: "none",
    mandado: "none",
    boletimActive: "#05050A",
    inqueritoActive: "#101021",
    mandadoActive: "#101021",
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
                  <MenuItem>
                    <MenuButton
                      type="button"
                      onClick={() => this.handleButton("inquerito")}
                      style={{ background: inqueritoActive }}
                    >
                      Inqueritos
                    </MenuButton>
                  </MenuItem>
                  <MenuItem>
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
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    <TableTr>
                      <TableTd>1</TableTd>
                      <TableTd>Daniel Souza</TableTd>
                      <TableTd>13/11/2020 06:56</TableTd>
                      <TableTd>
                        <Buttons>
                          <Button
                            background="blue"
                            to="/documentos/boletim/1232342"
                          >
                            <FaEye size={15} />
                          </Button>
                          <Button background="green">
                            <FaEdit size={15} />
                          </Button>
                          <Button background="yellowgreen">
                            <FaPrint size={15} />
                          </Button>
                        </Buttons>
                      </TableTd>
                    </TableTr>
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
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    <TableTr>
                      <TableTd>1</TableTd>
                      <TableTd>Daniel Souza</TableTd>
                      <TableTd>13/11/2020 06:56</TableTd>
                      <TableTd>
                        <Buttons>
                          <Button background="blue">
                            <FaEye size={15} />
                          </Button>
                          <Button background="green">
                            <FaEdit size={15} />
                          </Button>
                          <Button background="yellowgreen">
                            <FaPrint size={15} />
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
                      <TableTh>Opções</TableTh>
                    </TableTr>
                  </TableHead>
                  <TableBody>
                    <TableTr>
                      <TableTd>1</TableTd>
                      <TableTd>Daniel Souza</TableTd>
                      <TableTd>13/11/2020 06:56</TableTd>
                      <TableTd>
                        <Buttons>
                          <Button background="blue">
                            <FaEye size={15} />
                          </Button>
                          <Button background="green">
                            <FaEdit size={15} />
                          </Button>
                          <Button background="yellowgreen">
                            <FaPrint size={15} />
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
