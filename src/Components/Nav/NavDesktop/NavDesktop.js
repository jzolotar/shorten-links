// export { HeaderContainer, ListItems } from './NavDesktop.styled';

import {
  HeaderContainer,
  ListItems,
  LoginSection,
  Link,
  SignUpBtn,
} from './NavDesktop.styled';
import Item from './Item/Item';

const NavDesktop = () => {
  const items = ['features', 'pricing', 'resources'];
  return (
    <HeaderContainer>
      <h1>Shortly</h1>
      <ListItems>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ListItems>
      <LoginSection>
        <Link>Login</Link>
        <SignUpBtn>Sign Up</SignUpBtn>
      </LoginSection>
    </HeaderContainer>
  );
};

export default NavDesktop;
