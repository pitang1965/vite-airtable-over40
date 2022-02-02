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
import NotFoundPage from './pages/NotFoundPage';
import Navber from './components/Navbar';
import RequireAuth from './components/route/RequireAuth';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('chrome') === -1) {
      toast.error(
        'Chromeを使用してください。それ以外ではデータ更新でエラーになるかもしれません。',
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
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/workshop'
              element={
                <RequireAuth>
                  <WorkshopPage />
                </RequireAuth>
              }
            />
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <FooterMenu />
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
