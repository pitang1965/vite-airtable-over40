import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterMenu from './components/FooterMenu';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/Global';
import { lightTheme, darkTheme } from './styled/Themes';
import useTheme from './hooks/useTheme';
import Home from './pages/Home';
import Workshop from './pages/Workshop';
import About from './pages/About';
import Navber from './components/Navbar';
import toast, { Toaster } from 'react-hot-toast';

const StyledApp = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to right,
    var(--main-bg-gradient-color1),
    var(--main-bg-gradient-color2)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

function App() {
  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') > 1 && ua.indexOf('chrome') === -1) {
      toast.error(
        'Safariはサポートされていません。ChromaかFirefoxを使用してください。',
        {
          icon: '😇',
        }
      );
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <StyledApp>
          <Toaster />
          <Navber toggleTheme={toggleTheme} />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/workshop' component={Workshop} />
            <Route path='/' component={Home} />
          </Switch>
          <FooterMenu />
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
