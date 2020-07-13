import styled from "styled-components";
import { motion } from "framer-motion";
import { customStyles } from "styled/GlobalStyle";

export const Container = styled(motion.div)`
  --padding-topic: 8px;
  --border-radius-topic: 20px;
  width: 100%;
  background-color: var(--main-bg-color-darker);
  border-radius: var(--border-radius-topic);
  height: 162px;
  padding: var(--padding-topic);
  position: relative;
  ${customStyles}
`;

export const TopicImage = styled.div<{ src?: string }>`
  position: absolute;

  top: var(--padding-topic);
  bottom: var(--padding-topic);
  left: var(--padding-topic);
  right: var(--padding-topic);
  border-radius: var(--border-radius-topic);
  ${({ src }) =>
    src &&
    `
background-size: cover;
background-repeat: no-repeat;
background-position:center;
background-image: url(${src})
`}
`;

export const Info = {
  container: styled.div`
    display: flex;
    position: absolute;
    bottom: var(--padding-topic);
    right: calc(var(--padding-topic) * 3);
    left: calc(var(--padding-topic) * 3);
    margin-bottom: 12px;
  `,
  titleComments: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
  `,
  title: styled.div`
    font-size: var(--font-size-title-medium);
    color: var(--color-white);
    padding-bottom: 15px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--color-white-transparent);
  `,
  comment: styled.div`
    font-size: var(--font-size-small);
    color: var(--color-white);
    display: flex;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  `,
  userContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin-left: 24px;
    align-items: center;
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
