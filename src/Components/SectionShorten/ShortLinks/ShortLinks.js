import { StyledShortLinks } from './ShortLinks.styled';

const ShortLinks = () => {
  return (
    <StyledShortLinks>
      <form>
        <input placeholder='Shorten a link here...' type='text' />
        <button type='submit'>Shorten It !</button>
      </form>
    </StyledShortLinks>
  );
};

export default ShortLinks;
