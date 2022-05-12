import styled from 'styled-components';
import bgBoost from '../../images/bg-boost-desktop.svg';

export const StyledBoostSection = styled.section`
  width: 100%;
  background: url(${bgBoost}) no-repeat center;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  padding: 1rem;

  h1 {
    text-align: center;
    color: #fff;
  }
`;

export const SectionBoostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 29rem;
  margin: 0 auto;
  padding: 1rem 4rem;
`;

export const BoostBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1.5625rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.cyan};
  font-size: 1.2rem;
  color: #fff;
  &:hover {
    background-color: hsl(180, 57%, 73%);
  }
`;
