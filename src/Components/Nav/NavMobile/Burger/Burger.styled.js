import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  position: absolute;
  right: 1rem;
  margin: auto;
  bottom: 0;
  top: 0;
  /* top: 50%;
  transform: translateY(-50%);  motion animations was not working with this one*/
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:hover {
    scale: 1.1;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
