import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  height: 75px;
  line-height: 75px;

  background: #07070f;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 35px;
  margin-right: 5px;
`;

const Lista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;

  color: #fff;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: #dddddd;
  margin-right: 13px;
  font-size: 13pt;

  &:hover {
    color: #adadad;
  }
`;

const Perfil = styled.img`
  width: 60px;
  margin-right: 10px;

  border-radius: 40px;
  border: 2px solid #fff;

  &:hover {
    opacity: 0.6;
  }
`;

const MenuNav = styled(Menu)`
  margin-top: 53px;
  margin-left: 20px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
`;

const MenuItemNav = styled(MenuItem)``;

const ButtonMenu = styled(Button)`
  color: #dddddd !important;

  &:hover {
    color: #adadad !important;
  }
`;

export {
  Container,
  Lista,
  Links,
  Logo,
  Perfil,
  MenuNav,
  MenuItemNav,
  ButtonMenu,
};
