import styled from 'styled-components';

export const SignUpBtn = styled.button`
  padding: 1rem 0rem;
  width: 65vw;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  color: white;
  background: ${({ theme }) => theme.colors.cyan};
`;

export const Link = styled.a`
  font-size: 1.2rem;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
`;

export const StyledLoginSection = styled.section`
  margin-top: 2.2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
