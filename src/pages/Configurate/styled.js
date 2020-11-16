import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  margin-top: 30px;
`;

const PainelConfigurate = styled.div`
  width: 600px;
  height: 75%;
  padding: 30px;

  display: flex;
  flex-direction: column;

  background: #07070f;
  border-radius: 10px;
  border-right: 2px solid yellow;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
`;

const TitlePainelConfigurate = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;

  background: #101021;
  color: #fff;
  font-size: 15pt;

  border-radius: 10px 0 10px 0;
  border-left: 2px solid yellow;
`;

const Group = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
`;

const Form = styled.form``;

const Label = styled.label`
  font-size: 13pt;
  margin-bottom: 10px;
  color: #fff;
`;

const Input = styled.input`
  border: none;
  border-right: 5px solid yellow !important;

  color: #000;
  font-size: 14pt;
  padding: 10px;
  background: #101021;
  color: #ddd;

  height: 25px;
  border-radius: 10px;
`;

export {
  Container,
  PainelConfigurate,
  TitlePainelConfigurate,
  Group,
  Form,
  Label,
  Input,
};
