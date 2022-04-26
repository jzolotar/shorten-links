import { Link } from '../NavDesktop.styled';

const Item = ({ item }) => {
  return (
    <li>
      <Link>{item}</Link>
    </li>
  );
};

export default Item;
