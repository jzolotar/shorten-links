import { StyledItem } from './Item.styled';

const Item = ({ title, desc, img }) => {
  console.log(img.brandImg);
  return (
    <StyledItem img={img}>
      <div></div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </StyledItem>
  );
};

export default Item;
