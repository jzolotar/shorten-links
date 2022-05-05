import styled from 'styled-components';

export const StyledResources = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (min-width: 52.5rem) {
    align-items: flex-start;
  }

  a {
    color: #9e9aa7;
    &:hover {
      color: ${({ theme }) => theme.colors.cyan};
    }
  }
`;
