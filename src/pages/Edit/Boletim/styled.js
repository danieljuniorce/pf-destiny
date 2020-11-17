import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  margin-bottom: 40px;
`;

const Painel = styled.div`
  width: 700px;
  margin-top: 30px;
  color: #ddd;
  padding: 30px;

  background: #07070f;
  border-radius: 10px;
  border-right: 2px solid yellow;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
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

const FirtInfoTitle = styled.p`
  font-size: 15pt;
  font-weight: 500;

  margin-left: 30px;
`;

const SecondInfoTitle = styled.p`
  background: #19b47c;
  height: 30px;
  line-height: 30px;
  width: 160px;
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

const Form = styled.form`
  margin-left: 15px;
  margin-right: 15px;
`;

const Group = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  margin-bottom: 15px;
`;

const GroupInline = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  justify-content: space-between;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 13pt;

  color: #f7fafc;
`;

const Input = styled.input`
  border: none;

  background: #101021;
  color: #ddd;
  padding: 6px;
  font-size: 15pt;

  border-radius: 10px;
  border-left: 4px solid yellow;

  height: 35px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
`;

const TextArea = styled.textarea`
  background: #101021;
  border-radius: 10px;
  border-left: 2px solid yellow;
  padding: 10px;

  font-size: 12pt;
  color: #ddd;
`;

const Final = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 55px;
`;

const CreateBy = styled.p``;

const ButtonCreate = styled.button`
  height: 60px;
  width: 190px;
  padding: 15px;
  border-radius: 10px;
  background: #ca1d3a;
  color: #ddd;
  border: none;
  font-size: 15pt;
  font-weight: 500;
`;

export {
  Container,
  Painel,
  PainelTitle,
  FirtInfoTitle,
  SecondInfoTitle,
  TitleNameGroup,
  Form,
  Group,
  GroupInline,
  Label,
  Input,
  TextArea,
  Final,
  CreateBy,
  ButtonCreate,
};
