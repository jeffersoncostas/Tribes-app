import styled from "styled-components";
import { motion } from "framer-motion";
import { customStyles } from "styled/GlobalStyle";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: var(--z-index-modal);
  display: flex;
  align-items: center;
`;

export const Modal = {
  container: styled(motion.div)`
    width: 100%;
    height: 436px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 14px 20px;
    background-color: var(--main-bg-color);
    z-index: var(--z-index-modal);
  `,
  row: styled.div<{ customStyles?: string }>`
    width: 100%;
    display: flex;
    ${customStyles}
  `,
  userContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    margin-right: 16px;
  `,
  userPicture: styled.div<{ src?: string }>`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 4px solid var(--secondary-color);
    ${({ src }) =>
      src &&
      `
      background-size: cover;
      background-repeat: no-repeat;
      background-position:center;
      background-image: url(${src})
      `}
  `,

  userName: styled.span`
    margin-top: 4px;
    font-size: var(--font-size-small);
    color: var(--color-white);
  `,
};
