import { useState } from 'react';
import { StyledLink } from './Link.styled';

const Link = ({ item }) => {
  const [isCopied, setIsCopied] = useState(false);
  const text = item.shortLink;

  const copyTextToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(text)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledLink isCopied={isCopied}>
      <p>{item.fullLink}</p>
      <section>
        <p>{item.shortLink}</p>
        <button onClick={handleCopyClick}>
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </section>
    </StyledLink>
  );
};

export default Link;
