import { StyledNav } from './Nav.styled';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';
import Media from 'react-media';

const Nav = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 52rem)',

        large: '(min-width: 75rem)',
      }}
    >
      {(matches) => (
        <StyledNav>{matches.small ? <NavMobile /> : <NavDesktop />}</StyledNav>
      )}
    </Media>
  );
};

export default Nav;
