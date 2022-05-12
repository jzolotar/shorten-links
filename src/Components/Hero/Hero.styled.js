import styled from 'styled-components';

export const HeroContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 52rem) {
    flex-direction: row-reverse;
    margin-top: 1.5rem;
  }
  @media (min-width: 82.75rem) {
    overflow: unset;
  }
`;

export const HeroImg = styled.img`
  position: relative;
  left: 1rem;
  max-width: 130%;
  @media (min-width: 52rem) {
    min-width: 75%;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1.2rem;

  @media (min-width: 52rem) {
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const HeroTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  letter-spacing: 0.5px;
  line-height: 1;
  @media (min-width: 52rem) {
    text-align: left;
    font-size: 3.5rem;
  }
`;

export const HeroDesc = styled.p`
  text-align: center;
  font-size: 1.45rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  @media (min-width: 52rem) {
    text-align: left;
  }
`;

export const HeroBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1.5625rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.cyan};
  font-size: 1.2rem;
  color: #fff;
  &:hover {
    background-color: hsl(180, 57%, 73%);
  }
`;

export const HeroImgContainer = styled.div`
  overflow: hidden;
`;
