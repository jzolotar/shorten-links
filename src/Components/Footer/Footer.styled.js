import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  color: #fff;
  width: 100%;
`;

export const FooterColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  @media (min-width: 52.5rem) {
    flex-direction: row;
    align-items: flex-start;
    gap: 7.5rem;
  }
`;

export const Titlte = styled.h2``;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* justify-content: space-between;
  align-items: flex-start; */
  @media (min-width: 52.5rem) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
