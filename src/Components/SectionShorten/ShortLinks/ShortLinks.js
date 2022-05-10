import { StyledShortLinks } from './ShortLinks.styled';

const ShortLinks = ({ alert, linkInput, setLinkInput, onSubmitHandler }) => {
  return (
    <StyledShortLinks>
      <form onSubmit={onSubmitHandler}>
        <input
          className={alert ? 'alert' : ''}
          placeholder='Shorten a link here...'
          type='text'
          value={linkInput}
          onChange={(event) => setLinkInput(event.target.value)}
        />
        <button type='submit'>Shorten It !</button>
        {alert && <p>Please enter a valid link</p>}
      </form>
    </StyledShortLinks>
  );
};

export default ShortLinks;
