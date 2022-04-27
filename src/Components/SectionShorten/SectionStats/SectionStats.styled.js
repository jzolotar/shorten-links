import styled from 'styled-components';

export const Title = styled.h1`
  color: #333;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 1.2rem;
`;

export const SectionItems = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  max-width: 1400px;

  @media (min-width: 52rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2.5rem;
  }
`;
