import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterMenu from './components/FooterMenu';
import styled from 'styled-components';
import { GlobalStyle } from './styled/Global';
import Home from './pages/Home';
import About from './pages/About';
import Navber from './components/Navbar';

const StyledApp = styled.div`
  min-height: 100vh;
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <StyledApp>
        <Navber />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
        <FooterMenu />
      </StyledApp>
    </Router>
  );
}

export default App;
