import styled from "styled-components";
import { motion } from "framer-motion";
import tribesName from "assets/icons/tribes.svg";
export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 262px;
  z-index: var(--z-index-sidebar);
  background-color: var(--main-bg-color);
  background-image: url(${tribesName});
  background-size: auto 497px;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  padding-top: 26px;
`;

export const Profile = {
  container: styled(motion.div)`
    border-bottom: 1px solid var(--separator-color);
    display: flex;
    justify-content: space-between;
    padding: 0px 18px 30px;
    align-items: center;
    margin-bottom: 20px;
  `,
  pic: styled.div<{ src: string }>`
    width: 50px;
    height: 50px;
    border: 2px solid var(--secondary-color);
    border-radius: 50%;
    ${({ src }) =>
      src &&
      `
background-size: cover;
background-repeat:no-repeat;
background-position:center;
background-image: url(${src})
`}
  `,
  name: styled.span`
    font-size: var(--font-size-medium);
    color: var(--color-white);
  `,
};

export const Item = {
  container: styled(motion.button)`
    padding: 21px 10px 20px 50px;
    display: flex;
    width: 100%;
    background: none;
    border: none;
    transition: all 300ms;
    &:active {
      background-color: var(--main-bg-color-darker);
    }
    svg {
      width: 24px;
      height: 24px;
      margin-right: 14px;
    }
  `,

  text: styled.span`
    font-size: var(--font-size-title);
    color: var(--color-white);
    text-transform: capitalize;
  `,
};
