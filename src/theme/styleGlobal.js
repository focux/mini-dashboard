import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,600');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}
`;
