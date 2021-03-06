import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg-gradient-color1: ${(props) => props.theme.mainBgGradientColor1};
    --main-bg-gradient-color2: ${(props) => props.theme.mainBgGradientColor2};
    --main-fg-color: ${(props) => props.theme.mainFgColor};
    --card-bg-color: ${(props) => props.theme.cardBgColor};
    --card-textarer-bg-color: ${(props) => props.theme.cardTextareaBgColor};
    --button-fg-color: ${(props) => props.theme.buttonFgColor};
    --button-fg-hover-color: ${(props) => props.theme.buttonFgHoverColor};
    --button-bg-color: ${(props) => props.theme.buttonBgColor};
    --button-bg-hover-color: ${(props) => props.theme.buttonBgHoverColor};
  }
  * {
    color: var(--main-fg-color);
  }
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
