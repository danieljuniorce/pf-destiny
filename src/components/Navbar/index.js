import React from "react";
import { Fade, Divider } from "@material-ui/core";
import { FaAward, FaExternalLinkAlt, FaCog } from "react-icons/fa/index";
import { Link } from "react-router-dom";

import {
  Container,
  Links,
  Lista,
  Logo,
  Perfil,
  ButtonMenu,
  MenuItemNav,
  MenuNav,
} from "./styled";
import { logout } from "../../auth";
import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Lista>
        <Logo src={logo} alt="logo" />

        <Links style={{ marginLeft: "14px" }} to="/arquivos">
          Arquivos
        </Links>
      </Lista>
      <Lista>
        <ButtonMenu
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Perfil src={perfil} alt="perfil" />
          Daniel Souza
        </ButtonMenu>
        <MenuNav
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItemNav onClick={handleClose}>
            <FaAward size={14} />
            &nbsp;
            <Link
              to="/usuario/perfil"
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "14pt",
              }}
            >
              Perfil
            </Link>
          </MenuItemNav>
          <MenuItemNav onClick={handleClose}>
            <FaCog size={14} />
            &nbsp;
            <Link
              to="/usuario/configuracao"
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "14pt",
              }}
            >
              Configurações
            </Link>
          </MenuItemNav>
          <Divider />
          <MenuItemNav
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            <FaExternalLinkAlt size={14} />
            &nbsp;
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "14pt",
              }}
            >
              Sair
            </Link>
          </MenuItemNav>
        </MenuNav>
      </Lista>
    </Container>
  );
}

export default Navbar;
