import styled from 'styled-components';
import bgImage from '../../../images/bg-shorten-desktop.svg';

export const StyledShortLinks = styled.div`
  background: url(${bgImage}) no-repeat;
  background-color: #3b3054;
  padding: 2rem;
  border-radius: 0.5rem;
  position: absolute;
  width: 90%;
  max-width: 1400px;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 52rem) {
    top: -50px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    @media (min-width: 52rem) {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
  }

  input {
    width: 100%;
    padding: 0.65rem;

    border: 3px solid transparent;
    border-radius: 5px;
    margin-left: 0;
    font-size: 0.9rem;
    font-size: 1rem;

    &.alert {
      border: 3px solid #f46262;
      color: red;
      ::placeholder {
        color: #f46262;
      }
    }
  }

  button {
    width: 100%;
    padding: 0.65rem;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.cyan};
    color: #fff;
    font-size: 1rem;
  }

  p {
    position: absolute;
    font-size: 0.8rem;
    color: #f46262;
    top: -25px;
    left: 2.5px;

    @media (min-width: 52rem) {
      top: 50px;
      left: 12.6px;
    }
  }
`;
