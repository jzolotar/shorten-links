import twitter from '../../../images/icon-twitter.svg';
import instagram from '../../../images/icon-instagram.svg';
import facebook from '../../../images/icon-facebook.svg';
import pinterest from '../../../images/icon-pinterest.svg';
import { Fragment } from 'react';
import { StyledSocials } from './Socials.styled';

const Socials = () => {
  return (
    <StyledSocials>
      <img src={twitter} alt='' />
      <img src={instagram} alt='' />
      <img src={facebook} alt='' />
      <img src={pinterest} alt='' />
    </StyledSocials>
  );
};

export default Socials;
