import {
  Container,
  InnerContainer,
  StyledSectionShorten,
} from './SectionShorten.styled';
import SectionStast from './SectionStats/SectionStats';
import ShortLinks from './ShortLinks/ShortLinks';

const SectionShorten = () => {
  return (
    <StyledSectionShorten>
      <Container>
        <ShortLinks />
        <InnerContainer>
          <SectionStast />
        </InnerContainer>
      </Container>
    </StyledSectionShorten>
  );
};

export default SectionShorten;
