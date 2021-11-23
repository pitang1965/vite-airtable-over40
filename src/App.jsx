import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterMenu from './components/FooterMenu';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './styled/StyledApp';
import { GlobalStyle } from './styled/Global';
import { lightTheme, darkTheme } from './styled/Themes';
import useTheme from './hooks/useTheme';
import HomePage from './pages/HomePage';
import WorkshopPage from './pages/WorkshopPage';
import AboutPage from './pages/AboutPage';
import Navber from './components/Navbar';
import RequireAuth from './components/route/RequireAuth';
import toast, { Toaster } from 'react-hot-toast';

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
          <Routes>
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/workshop' element={<RequireAuth><WorkshopPage /></RequireAuth>} />
            <Route path='/' element={<HomePage/>} />
          </Routes>
          <FooterMenu />
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
