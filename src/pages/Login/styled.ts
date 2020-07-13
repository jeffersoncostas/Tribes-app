import styled from "styled-components";
import bgImage from "assets/images/bg.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 88px 30px 17px;
`;

export const FormContainer = styled.div`
  margin-top: 70px;
  width: 100%;
`;
