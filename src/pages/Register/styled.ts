import styled from "styled-components";
import { ReactComponent as LogoSvg } from "assets/icons/logo.svg";

export const Logo = styled(LogoSvg)`
  width: 161px;
  height: 80px;
  .logo-name {
    fill: var(--secondary-color);
  }
`;

export const FormContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  & > * {
    flex: 0.5;
  }

  button:nth-child(1) {
    margin-right: 15px;
  }
`;
