import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 25px;

  display: flex;
  justify-content: center;
`;

const ContentPerfil = styled.div`
  width: 600px;

  margin-right: 60px;
  background: #07070f !important;
  color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
  border-right: 2px solid yellow;
  padding: 20px;
  display: flex;
  align-items: flex-start;

  flex-direction: column;

  margin-bottom: 30px;
`;

const ContentTitlePerfil = styled.div`
  width: 100%;
  height: 80px;
  line-height: 60px;

  border-radius: 10px 0 10px 0;
  border-right: 2px solid yellow;

  text-align: center;
  font-size: 14pt;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #101021 !important;

  margin-bottom: 20px;
`;

const Title = styled.p`
  margin-left: 30px;
  font-size: 15pt;
`;

const Info = styled.p`
  margin-right: 30px;
  height: 30px;
  width: 100px;
  line-height: 30px;
  background: #5e72e4;
  border-radius: 10px;

  font-size: 12pt;
`;

const UserInfoText = styled.p`
  text-align: left;
  margin-left: 15px;
  margin-bottom: 15px;

  font-size: 15pt;
  color: #ddd;
  opacity: 0.7;
`;

const Form = styled.form`
  margin-left: 15px;
  margin-right: 15px;
`;

const Group = styled.div`
  display: flex;

  flex-direction: column;
  margin-bottom: 15px;
`;

const GroupInline = styled.div`
  display: flex;
  margin-bottom: 15px;

  justify-content: space-between;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 13pt;
  margin-left: 15px;

  color: #f7fafc;
`;

const Input = styled.input`
  border: none;
  width: 250px;

  background: #101021;
  color: #ddd;
  padding: 6px;
  font-size: 15pt;

  border-radius: 10px;
  border-right: 4px solid yellow;
  margin-left: 15px;

  height: 35px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
`;

const Divider = styled.hr`
  opacity: 0.3;
  border: 1px solid white;

  margin-bottom: 15px;
`;

const InfoPerfil = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0, 0.2);
  border-right: 2px solid yellow;

  background: #07070f !important;
  color: #ddd;
  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 15px;
`;

const PerfilImg = styled.img`
  margin-bottom: 15px;
  border-radius: 80px;
  border: 4px solid #101021;
  width: 180px;
`;

const Status = styled.p`
  color: ${(props) => props.color};
  font-size: 12pt;
`;

const Name = styled.p`
  margin-top: 20px;
  font-size: 16pt;
  font-weight: 600;
`;

const Cargo = styled.p`
  font-size: 14pt;
`;

export {
  Container,
  ContentPerfil,
  ContentTitlePerfil,
  InfoPerfil,
  UserInfoText,
  Title,
  Info,
  Form,
  Group,
  GroupInline,
  Label,
  Input,
  Divider,
  PerfilImg,
  Status,
  Name,
  Cargo,
};
