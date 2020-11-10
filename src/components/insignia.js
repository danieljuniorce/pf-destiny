import styled from "styled-components";

const Insignia = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Merito = styled.div`
  height: 40px;
  width: 50px;

  background: ${(props) => props.background};
  text-align: center;

  margin-left: 10px;

  border-radius: 10px;

  line-height: 50px;
`;

export { Insignia, Merito };
