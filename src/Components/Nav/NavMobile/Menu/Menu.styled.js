import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenu = styled(motion.section)`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 92vw;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  border-radius: 0.6rem;
  z-index: 11000;
`;

export const StyledItems = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding-bottom: 2.2rem;

  li {
    font-size: 1.2rem;
    color: white;
    text-transform: capitalize;
  }
  &::after {
    position: absolute;
    content: '';
    width: 65vw;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
