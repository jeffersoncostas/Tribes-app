import styled from "styled-components";
import { customStyles } from "styled/GlobalStyle";

export const Container = styled.div<{
  fullWidth?: boolean;
  customStyles?: string;
}>`
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  ${({ fullWidth }) => fullWidth && "width:100%;"}
  ${customStyles}
`;

export const Label = styled.label`
  color: var(--color-white);
  font-weight: bold;
  letter-spacing: 1px;
  font-size: var(--font-size-small);
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const InputBase = styled.div`
  background-color: var(--separator-color);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--primary-color);
    height: 2px;
  }
  input {
    background: none;
    width: 100%;
    padding: 15px 22px;
    border: none;
    color: var(--color-white);
    font-weight: lighter;
  }
`;
