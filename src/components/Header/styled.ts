import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  height: var(--header-height);
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  padding: 24px 18px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: var(--z-index-header);
`;

export const Title = styled.span`
  font-size: var(--font-size-title);
  color: var(--color-white);
  font-weight: bold;
`;

export const Empty = styled.div`
  width: 20px;
  height: 20px;
`;
