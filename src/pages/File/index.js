import React from "react";

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
} from "./styled";
import Navbar from "../../components/Navbar";
import { FaPrint, FaEye, FaEdit } from "react-icons/fa/index";

function File() {
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
                  <MenuButton>Boletim de Ocorrências</MenuButton>
                </MenuItem>
                <MenuItem>
                  <MenuButton>Inqueritos</MenuButton>
                </MenuItem>
                <MenuItem>
                  <MenuButton>Mandados</MenuButton>
                </MenuItem>
              </Menus>
            </Menu>

            <StructTable>
              <TitleNameGroup>Boletins de Ocorrência</TitleNameGroup>
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
                  <TableTr>
                    <TableTd>2</TableTd>
                    <TableTd>Daniel Souza</TableTd>
                    <TableTd>13/11/2020 06:56</TableTd>
                    <TableTd>
                      {" "}
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
                  <TableTr>
                    <TableTd>3</TableTd>
                    <TableTd>Daniel Souza</TableTd>
                    <TableTd>13/11/2020 06:56</TableTd>
                    <TableTd>
                      {" "}
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
                  <TableTr>
                    <TableTd>4</TableTd>
                    <TableTd>Daniel Souza</TableTd>
                    <TableTd>13/11/2020 06:56</TableTd>
                    <TableTd>
                      {" "}
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

export default File;
