import Item from './Item/Item';

const Items = () => {
  const items = ['features', 'pricing', 'resources'];

  return items.map((item, index) => <Item key={index} item={item} />);
};

export default Items;
