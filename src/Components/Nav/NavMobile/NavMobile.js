import { useState } from 'react';
import { HeaderContainer } from '../Nav.styled';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { AnimatePresence } from 'framer-motion';

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <h1>Shortly</h1>
      <Burger onClick={() => setOpen(!open)} />
      <AnimatePresence>{open && <Menu key='menucomp' />}</AnimatePresence>
    </HeaderContainer>
  );
};

export default NavMobile;
