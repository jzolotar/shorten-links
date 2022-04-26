import { Fragment } from 'react';
import { Title, Desc } from './SectionStats.styled';
import { SectionItems } from './SectionStats.styled';
import Item from './Item/Item';
import { data } from './Item/data';

const SectionStast = () => {
  return (
    <Fragment>
      <Title>Advanced Statistics</Title>
      <Desc>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Desc>
      <SectionItems>
        {data.map((item, index) => (
          <Item
            title={item.title}
            desc={item.desc}
            img={item.img}
            key={index}
          />
        ))}
      </SectionItems>
    </Fragment>
  );
};

export default SectionStast;
