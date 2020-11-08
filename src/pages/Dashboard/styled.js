import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 30px;
`;

const PainelLeft = styled.div`
  width: 260px;
  padding: 10px;
`;
const PainelRight = styled.div`
  display: flex;
  padding: 10px;

  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  height: 120px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-left: 3px solid ${(props) => props.color};
  margin-right: 10px;

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
`;

const ContCard = styled.p`
  font-size: 18pt;
`;

export {
  Container,
  Card,
  PainelLeft,
  PainelRight,
  TitleCard,
  ContCard,
  StructText,
  StructIcon,
};
