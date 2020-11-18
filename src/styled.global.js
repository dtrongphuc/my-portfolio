import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-smooth: auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
