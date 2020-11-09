import styled from "styled-components";
import { LinkButton } from "../../components/global";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

const PainelLeft = styled.div`
  width: 260px;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const PainelRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  height: 120px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-left: 3px solid ${(props) => props.color};
  margin-right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;

  background: #07070f !important;
`;

const StructText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-left: 10px;

  flex-direction: column;
`;

const StructIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleCard = styled.p`
  margin-bottom: 5px;
  color: ${(props) => props.color};
`;

const ContCard = styled.p`
  font-size: 18pt;
  opacity: 0.9;
`;

const Button = styled(LinkButton)`
  height: 50px;
  width: 200px;
  line-height: 50px;

  background: ${(props) => props.color} !important;
`;

const PainelWarning = styled.div`
  max-width: 975px;
  height: 400px;
  background: #07070f !important;

  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);

  border-left: 2px solid red;
  padding: 20px;
`;

const PainelTitleWarning = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 10px 0px 10px 0px;

  border-right: 2px solid red;

  text-align: center;
  background: #101021;
  color: #fff;

  margin-bottom: 9px;
`;

const TextTitleWarning = styled.p`
  font-size: 14pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextTitleWarningActual = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

const TextWarningActual = styled.span`
  font-size: 13pt;
  line-height: -1.9;
  color: #fff;
  text-align: initial;
`;

const WithPostNameAndDate = styled.p`
  text-align: right;
  margin-top: 25px;
`;

const TitleRankCard = styled.div`
  margin-top: 30px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 15px;

  font-size: 17pt;
  background: #07070f !important;
  color: #fff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
  border-top: 2px solid #00ff65;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  Cards,
  Card,
  PainelLeft,
  PainelRight,
  TitleCard,
  ContCard,
  StructText,
  StructIcon,
  Button,
  TextTitleWarning,
  PainelWarning,
  PainelTitleWarning,
  TextTitleWarningActual,
  TextWarningActual,
  WithPostNameAndDate,
  TitleRankCard,
};
