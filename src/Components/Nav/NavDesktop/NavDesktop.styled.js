import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 87.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
`;

export const ListItems = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    text-transform: capitalize;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1rem;
  }
`;

export const LoginSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

export const SignUpBtn = styled.button`
  padding: 0.72rem 1.5rem;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: ${({ theme }) => theme.colors.cyan};
  font-size: 1rem;
  cursor: pointer;
`;

export const Link = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
`;
