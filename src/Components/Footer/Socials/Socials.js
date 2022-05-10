import twitter from '../../../images/icon-twitter.svg';

import instagram from '../../../images/icon-instagram.svg';
import facebook from '../../../images/icon-facebook.svg';
import pinterest from '../../../images/icon-pinterest.svg';
import { Fragment } from 'react';
import { StyledSocials } from './Socials.styled';

const Socials = () => {
  return (
    <StyledSocials>
      <a href='#'>
        <img src={twitter} alt='' />
      </a>
      <a href='#'>
        <img src={instagram} alt='' />
      </a>
      <a href='#'>
        <img src={facebook} alt='' />
      </a>
      <a href='#'>
        <img src={pinterest} alt='' />
      </a>
    </StyledSocials>
  );
};

export default Socials;
