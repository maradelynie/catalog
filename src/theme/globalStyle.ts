import styled, { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root {
  --container: 70rem;
  --lightblue: #29B6C8;
  --darkblue: #114B5F;
  --lightgrey: #F4F5F9;
  --midgrey: #e4e4e4;
  --red: #F45B69;
}
  html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    *{
        box-sizing: border-box;
    }
    body {
        color: var(--darkblue);
        line-height: 1;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    h1{
        font-size: 2.3rem;
        font-weight: bold;
    }
    h2{
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    h3{
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    hr{
        border: 1px solid var(--lightgrey);
    }
    small{
        color: var(--lightblue);
        font-size: .8rem;

    }
    button {
        background-color: var(--lightblue);
        color: white;
        border: none;
        border-radius: 2rem;
        height: 2rem;
        padding: 0 1rem;
        cursor: pointer;
        transition-duration: .2s;
        white-space: nowrap;
    }
    button:hover{
    opacity: .7;
    }
    button:active{
    opacity: 1;
    }
    a {
        color: var(--lightblue);
    }
    h5 {
        font-size: 1.1rem;
        font-weight: bold;
    }
    @keyframes wave {
        0% {transform: translateY(13rem) translateX(5rem) scale(2) rotate(1deg);}
        46% {transform: translatey(10rem) translateX(5rem) scale(2.5) rotate(14deg);}
        100% {transform: translatey(25rem) translateX(5rem) scale(2) rotate(-13deg);}
    }

`;
 
export default GlobalStyle;
export const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: var(--container);
    margin: auto;
    align-items: flex-start;
    min-height: calc(100vh - 2rem);
`
