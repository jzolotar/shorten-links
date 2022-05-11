import styled from 'styled-components';

export const StyledLink = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 3px rgb(191 191 191 / 10%);

  @media (min-width: 52.5rem) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
    gap: 2rem;
  }

  p {
    color: #808080;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    white-space: nowrap;
    @media (min-width: 52.5rem) {
      width: 60%;
    }
  }

  section {
    border-top: 1px solid #808080;
    @media (min-width: 52.5rem) {
      border: unset;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      width: 40%;
    }
    p {
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.cyan};
      font-size: 1.1rem;
      @media (min-width: 52.5rem) {
        text-align: right;
      }
    }
    button {
      width: 100%;
      max-width: 100px;
      padding: 0.65rem;
      border: none;
      border-radius: 5px;
      background-color: ${({ theme, isCopied }) =>
        isCopied ? '#333' : theme.colors.cyan};

      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
