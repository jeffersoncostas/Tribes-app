import styled from "styled-components";
import bgImage from "assets/images/bg.png";
import { customStyles } from "./GlobalStyle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ContainerLogin = styled.div<{ customStyles?: string }>`
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
  ${customStyles}
`;

export const FooterLink = styled(Link)`
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

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--backdrop-color);
  z-index: var(--z-index-backdrop);
`;

export const TopicItem = {
  container: styled(motion.div)`
    width: 100%;
    padding: 6px 10px;
    border-radius: 10px;
    background-color: var(--separator-color);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${customStyles}
  `,
  icon: styled.div<{ src?: string }>`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    ${({ src }) =>
      src &&
      `
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center;
      background-image: url(${src})
      `}
  `,
  name: styled.div`
    font-size: var(--font-size-medium);
    color: var(--color-light-purple);
  `,
};
