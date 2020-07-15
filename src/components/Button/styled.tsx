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
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-regular);
  svg {
    position: relative;
    margin-right: 20px;
  }
  ${({ fullWidth }) => fullWidth && "width:100%;"}
  ${customStyles};
`;

export const Filled = styled(Default)`
  background: var(--primary-color);
  padding: 20px 10px;

  &:active {
    background: var(--primary-color-200);
  }
  ${customStyles};
`;

export const Rounded = styled(Default)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  svg {
    margin: 0;
  }
`;
