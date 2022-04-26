import {
  HeroContainer,
  HeroImg,
  HeroSection,
  HeroTitle,
  HeroDesc,
  HeroBtn,
  HeroImgContainer,
} from './Hero.styled';

import heroImg from '../../images/illustration-working.svg';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImgContainer>
        <HeroImg src={heroImg} />
      </HeroImgContainer>

      <HeroSection>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroDesc>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </HeroDesc>
        <HeroBtn>Get Started</HeroBtn>
      </HeroSection>
    </HeroContainer>
  );
};

export default Hero;
