import React from "react";
import { Fade, Divider } from "@material-ui/core";
import { FaAward, FaExternalLinkAlt, FaCog } from "react-icons/fa/index";

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

import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.jpg";

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
        <Links style={{ marginLeft: "14px" }} to="!#">
          Dashboard
        </Links>
        <Links to="!#">Contigente</Links>
        <Links to="!#">Arquivos</Links>
        <Links to="!#">Procurados</Links>
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
            &nbsp;Perfil
          </MenuItemNav>
          <MenuItemNav onClick={handleClose}>
            <FaCog size={14} />
            &nbsp;Configurações
          </MenuItemNav>
          <Divider />
          <MenuItemNav onClick={handleClose}>
            <FaExternalLinkAlt size={14} />
            &nbsp;Sair
          </MenuItemNav>
        </MenuNav>
      </Lista>
    </Container>
  );
}

export default Navbar;
