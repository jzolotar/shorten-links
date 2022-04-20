import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');



html {
  font-size: 100%;
  box-sizing: border-box;
  
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  min-height: 100vh;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}


a {
  text-decoration: none;
}

ol, ul {
  list-style: none;
}

p {
  margin: 0;
  padding: 0;
}
img {
    display: block;
  max-width: 100%;
}
`;

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Provider;
