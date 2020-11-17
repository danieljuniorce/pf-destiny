import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

const LinkButton = styled(Link)`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 22px;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  text-align: center;
  & {
    filter: brightness(90%);
  }
`;

const InputType = styled(Input)`
  margin-top: 20px;

  width: 300px;
  color: #0a0b16 !important;
`;

const FormControlType = styled(FormControl)`
  margin-top: 12px;
`;

const InputLabelType = styled(InputLabel)`
  color: #0a0b16 !important;
`;

const FormHelperTextType = styled(FormHelperText)``;

const TitlePage = styled.div`
  margin-top: 30px;
  width: 700px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #ddd;
  font-weight: 400;

  margin-left: 50px;
`;

const TitleReturnPage = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
  text-decoration: none;
`;

export {
  LinkButton,
  InputType,
  FormControlType,
  InputLabelType,
  FormHelperTextType,
  TitlePage,
  Title,
  TitleReturnPage,
};
