import styled, { createGlobalStyle } from 'styled-components';
import theme from './constaints/theme';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        height: 100%;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-smooth: auto;
        height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }
`;

export const ButtonLink = styled.a`
	display: inline-block;
	background-color: ${({ bgColor }) => bgColor || theme.primary};
	padding: 1rem 3rem;
	border-width: 2px;
	border-style: solid;
	border-color: ${({ bColor }) => bColor || theme.primary};
	border-radius: 2rem;
	outline: none;
	text-align: center;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	color: ${({ color }) => color || '#fff'};
	font-size: 1rem;
	font-weight: 500;
	line-height: 1rem;
	text-decoration: none;
`;

export const Section = styled.section`
	position: relative;
	padding: 4.5rem 0;
	overflow: hidden;
`;

export default GlobalStyle;
