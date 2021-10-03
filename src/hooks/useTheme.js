import { useState, useEffect } from 'react';
export default () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    setTheme(localStorageTheme || 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };
  return [theme, toggleTheme];
};
