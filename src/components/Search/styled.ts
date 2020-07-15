import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";

export const Container = styled(motion.div)<{ fullWidth?: boolean }>`
  ${({ fullWidth }) => fullWidth && "width:100%;"}
`;
export const SearchField = {
  container: styled(motion.div)`
    display: flex;
    padding: 8px 21px;
    flex-direction: column;
    background-color: var(--separator-color);
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    width: 100%;
  `,
  body: styled(motion.div)`
    width: 100%;
    padding-top: 14px;
  `,
  header: styled(motion.div)`
    font-size: var(--font-size-medium);
    color: var(--color-light-purple);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `,
  results: styled.div`
    margin-top: 15px;
    border-top: 1px solid var(--color-white-transparent);
    border-bottom: 1px solid var(--color-white-transparent);
  `,
  resultItem: styled.div`
    font-size: var(--font-size-regular);
    color: var(--color-white);
    padding: 10px 5px;
  `,
  footer: styled.div`
    padding: 18px 0px;
    padding-bottom: 12px;
  `,
  suggestion: styled.a`
    font-style: italic;
    color: var(--color-white);
    font-size: var(--font-size-regular);
  `,
};

export const IconContainer = styled(motion.div)``;
