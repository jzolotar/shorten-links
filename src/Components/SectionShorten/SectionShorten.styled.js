import styled from 'styled-components';
export const StyledSectionShorten = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  background-color: #ececec;

  margin-top: 5rem;
  position: relative;
  padding: 5rem 0;
`;

export const Container = styled.div`
  width: 90%;
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
