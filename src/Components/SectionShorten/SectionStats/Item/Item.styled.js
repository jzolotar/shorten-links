import styled from 'styled-components';

export const StyledItem = styled.article`
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem 3.5rem;
  text-align: center;
  position: relative;

  @media (min-width: 52rem) {
    padding: 2rem 1rem;
    padding-right: 5rem;
  }

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: url(${({ img }) => img}) no-repeat center;
    background-color: ${({ theme }) => theme.colors.darkViolet};
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translateX(-50%);

    @media (min-width: 52rem) {
      left: 80px;
    }
  }

  h1 {
    margin-top: 1.2rem;
    font-size: 1.1rem;
    @media (min-width: 52rem) {
      text-align: left;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    @media (min-width: 52rem) {
      text-align: left;
    }
  }
`;
