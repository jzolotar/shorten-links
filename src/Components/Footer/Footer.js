import Company from './Company/Company';
import Features from './Features/Features';
import Resources from './Resources/Resources';
import Socials from './Socials/Socials';

import {
  FooterColumns,
  StyledFooter,
  Titlte,
  Container,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Titlte>Shortly</Titlte>
        <FooterColumns>
          <Features />
          <Resources />
          <Company />
          <Socials />
        </FooterColumns>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
