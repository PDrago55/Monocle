import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
*,
*:before,
*:after {
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Oswald', sans-serif;
}

div, span, p, li, ul, ol {
    font-family: 'Slabo 27px', serif;
}
`;
