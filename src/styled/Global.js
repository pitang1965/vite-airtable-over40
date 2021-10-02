import { createGlobalStyle } from 'styled-components';

const isDarkMode = false;

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg-gradient1: ${isDarkMode ? '#3D0529' : '#d4d3dd'};
    --main-bg-gradient2: ${isDarkMode ? '#7B103E' : '#efefbb'};
    --main-fg-color: ${isDarkMode ? '#fff' : '#333'};
    --card-bg-color: ${isDarkMode ? '#15232D' : '#fff'};
    --card-textarer-bg-color: ${isDarkMode ? '#193549' : '#eee'};
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
