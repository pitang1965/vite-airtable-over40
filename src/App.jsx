import React from 'react';
import Members from './components/Members';
import FooterMenu from './components/FooterMenu';
import styled from 'styled-components';
import { Global } from './Styled/Global';

const StyledApp = styled.div`
  min-height: 100vh;
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const StyledH1 = styled.h1`
  letter-spacing: 0.1em;
`;

function App() {
  return (
    <>
      <Global />
      <StyledApp>
        <StyledH1>Over 40 Web Club主要メンバー</StyledH1>
        <Members />
        <FooterMenu />
      </StyledApp>
    </>
  );
}

export default App;
