import { useState } from 'react';
import axios from 'axios';
import {
  Container,
  InnerContainer,
  StyledSectionShorten,
} from './SectionShorten.styled';
import SectionStast from './SectionStats/SectionStats';
import ShortLinks from './ShortLinks/ShortLinks';
import { data } from './SectionStats/Item/data';
import Link from './Link/Link';

const url =
  'https://api.shrtco.de/v2/shorten?url=https://github.com/rtkleong10/frontend-mentor-shortly/blob/master/styles/3-layout/_footer.scss';

const SectionShorten = () => {
  const [linkInput, setLinkInput] = useState('');
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);

  const isValidHttpUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  };

  const shortenLinkInput = async (linkInput) => {
    const res = await axios(
      `https://api.shrtco.de/v2/shorten?url=${linkInput}`
    );
    if (res.data.ok) {
      setList((oldList) => [
        ...oldList,
        { shortLink: res.data.result.short_link, fullLink: linkInput },
      ]);
    }
  };

  //handlers
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //check if input is valid
    if (!isValidHttpUrl(linkInput) || !linkInput) {
      setAlert(true);
      return;
    }

    //if valid send api request to shorten link
    shortenLinkInput(linkInput);
    //add shorten link to list array

    //reset input alert / value
    setAlert(false);
    setLinkInput('');
  };

  return (
    <StyledSectionShorten>
      <Container>
        <ShortLinks
          alert={alert}
          linkInput={linkInput}
          setLinkInput={setLinkInput}
          onSubmitHandler={onSubmitHandler}
        />
        <InnerContainer>
          {list.map((item, index) => (
            <Link key={index} item={item} />
          ))}

          <SectionStast />
        </InnerContainer>
      </Container>
    </StyledSectionShorten>
  );
};

export default SectionShorten;
