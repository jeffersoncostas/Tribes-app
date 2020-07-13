import styled from "styled-components";
import { customStyles } from "styled/GlobalStyle";

export const Default = styled.button<{
  customStyles?: string;
  fullWidth?: boolean;
}>`
  border: none;
  transition: all 300ms;
  letter-spacing: 2px;
  background: transparent;
  color: var(--color-white);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ fullWidth }) => fullWidth && "width:100%;"}
  ${customStyles};
`;

export const Filled = styled(Default)`
  background: var(--primary-color);
  color: white;
  font-weight: bold;
  padding: 20px 10px;

  &:active {
    background: var(--primary-color-200);
  }
`;

export const Rounded = styled(Default)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
`;
