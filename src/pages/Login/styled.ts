import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  margin-top: 70px;
  width: 100%;
`;

export const Register = styled(Link)`
  width: 100%;
  font-size: var(--font-size-title-medium);
  line-height: 20px;
  font-weight: 300;
  color: var(--color-white);
  position: absolute;
  bottom: 17px;
  width: 100%;
  text-align: center;
`;
