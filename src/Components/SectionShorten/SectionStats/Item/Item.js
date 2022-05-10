import { StyledItem } from './Item.styled';

const Item = ({ title, desc, img }) => {
  return (
    <StyledItem img={img}>
      <div></div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </StyledItem>
  );
};

export default Item;
