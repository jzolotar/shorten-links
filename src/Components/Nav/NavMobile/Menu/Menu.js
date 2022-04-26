import { StyledMenu, StyledItems } from './Menu.styled';
import Items from '../Items/Items';
import LoginSection from '../LoginSection/LoginSection';

const Menu = () => {
  const variants = {
    hidden: {
      y: '-100vh',
      x: '-50%',
    },
    visible: {
      y: 0,
      x: '-50%',
    },
    exit: {
      y: '-100vh',
      x: '-50%',
      transition: { delay: 0.2, duration: 1.2 },
    },
  };
  return (
    <StyledMenu
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <StyledItems>
        <Items />
      </StyledItems>
      <LoginSection />
    </StyledMenu>
  );
};

export default Menu;
