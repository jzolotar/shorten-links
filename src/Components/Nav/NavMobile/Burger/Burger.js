import { StyledButton } from './Burger.styled';

const Burger = ({ onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledButton>
  );
};

export default Burger;
