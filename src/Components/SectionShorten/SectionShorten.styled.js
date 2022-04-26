import styled from 'styled-components';
export const StyledSectionShorten = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  background-color: #ececec;

  margin-top: 5rem;
  position: relative;
`;

export const Container = styled.div`
  padding: 0 1rem;

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const InnerContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
