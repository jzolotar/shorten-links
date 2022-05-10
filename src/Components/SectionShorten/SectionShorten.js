import { useState } from 'react';
import {
  Container,
  InnerContainer,
  StyledSectionShorten,
} from './SectionShorten.styled';
import SectionStast from './SectionStats/SectionStats';
import ShortLinks from './ShortLinks/ShortLinks';

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

  //handlers
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //check if input is valid
    if (!isValidHttpUrl(linkInput) || !linkInput) {
      setAlert(true);
      // console.log(isValidHttpUrl(linkInput));
      return;
    }

    //if valid send api request to shorten link

    //add shorten link to list array

    //reset input alert / value
    setAlert(false);
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
          <SectionStast />
        </InnerContainer>
      </Container>
    </StyledSectionShorten>
  );
};

export default SectionShorten;
