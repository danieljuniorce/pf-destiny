import styled from "styled-components";
import { LinkButton } from "../../components/global";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Painel = styled.div`
  width: 1120px;
  margin-top: 30px;
  color: #ddd;
  padding: 30px;

  background: #07070f;
  border-radius: 10px;
  border-right: 2px solid yellow;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);

  margin-bottom: 30px;
`;

const Files = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`;

const PainelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  line-height: 80px;

  border-radius: 10px 0 10px 0;
  border-left: 2px solid yellow;

  background: #101021;
  margin-bottom: 30px;
`;

const FirstTitlePainel = styled.p`
  font-size: 15pt;
  margin-left: 30px;
`;

const SecondTitlePainel = styled.p`
  background: #07070f;
  height: 30px;
  line-height: 30px;
  width: 90px;
  text-align: center;
  border-radius: 8px;

  margin-right: 30px;
`;

const TitleNameGroup = styled.p`
  text-align: left;
  margin-bottom: 15px;

  font-size: 13.5pt;
  color: #ddd;
  opacity: 0.7;
`;

const Menu = styled.div`
  width: 220px;
  margin-left: 30px;
`;

const Menus = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li``;

const MenuButton = styled.button`
  width: 100%;
  background: #101021;
  color: #ddd;
  border: none;
  border-left: 2px solid yellow;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);

  height: 60px;
  line-height: 60px;

  text-align: center;
  margin-bottom: 10px;

  font-size: 14pt;

  text-decoration: none;

  &:hover {
    background: #05050a;
  }

  cursor: pointer;
`;

const StructTable = styled.table`
  width: 100%;
  margin-left: 30px;
`;

const Table = styled.table`
  width: 100%;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody`
  text-align: center;
`;

const TableTr = styled.tr`
  background: #101021;
`;

const TableTh = styled.th`
  padding: 15px;
  font-size: 15pt;

  background: #14142b !important;
`;

const TableTd = styled.td`
  padding: 12px;
`;

const Buttons = styled.div`
  width: 100%;
`;

const Button = styled(LinkButton)`
  width: 50px;
  height: 29px;
  line-height: 29px;
  margin: 0;
  margin-left: 10px;

  background: ${(props) => props.background};
`;

export {
  Container,
  Painel,
  Files,
  PainelTitle,
  FirstTitlePainel,
  SecondTitlePainel,
  TitleNameGroup,
  Menu,
  Menus,
  MenuItem,
  MenuButton,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  StructTable,
  Buttons,
  Button,
};
