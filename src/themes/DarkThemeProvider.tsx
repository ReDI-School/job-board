import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DarkThemeContext from './DarkThemeContext';

const DarkThemeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const value = React.useMemo(() => ({
    darkMode,
    toggle: () => setDarkMode((mode) => !mode),
  }), [darkMode]);

  return <DarkThemeContext.Provider value={value}>{children}</DarkThemeContext.Provider>;
};


export default DarkThemeProvider;