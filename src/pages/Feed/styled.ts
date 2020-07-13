import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--main-bg-color);
  padding: 18px 21px 18px 19px;
  padding-top: calc(var(--header-height) + 18px);
  position: relative;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-bg-color);
  padding: 10px 21px 21px;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
`;
