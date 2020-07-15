import { ReactComponent as LogoSvg } from "assets/icons/logo-icon.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Logo = styled(LogoSvg)`
  width: 120px;
  height: 154px;
`;

export const SlideContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Info = {
  container: styled.div`
    margin-top: 60px;
  `,
  title: styled.div`
    font-size: var(--font-size-title-big);
    color: var(--color-white);
    margin-bottom: 15px;
    text-align: center;
  `,
  description: styled.div`
    width: 100%;
    color: var(--color-white);
    font-size: var(--font-size-regular);
    text-align: center;
    font-style: italic;
    opacity: 0.8;
    line-height: 22px;
  `,
};

export const SlideControl = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  margin-top: 40px;
  width: 100%;
  bottom: 113px;
  padding: 0px 60px;
`;

export const SelectedTopics = styled.div`
  padding-top: 15px;
  width: 100%;
`;
