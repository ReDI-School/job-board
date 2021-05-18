import React, { useEffect, useRef } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DarkThemeContext from './DarkThemeContext';

const DarkThemeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  const firstRender=useRef(true);

  useEffect(() => {
    const persistDarkMode=()=>localStorage.setItem('rediJobBoardIsDarkMode', darkMode? 'true' : 'false');
    window.addEventListener('beforeunload', persistDarkMode); // before unloading the app store the dark mode. Questionable if we always want to persist the darkmode tho
    
    return ()=>{
      window.removeEventListener('beforeunload', persistDarkMode);
    };
  }, [darkMode]);

  useEffect(()=>{
    if(firstRender.current){ // if this useEffect fires for the first time prio the darkMode value that is stored inside local storage
      const isDark=localStorage.getItem('rediJobBoardIsDarkMode');
      switch(isDark){ // can also json parse it before but seems overkill
      case 'true':
        setDarkMode(true);
        break;
      case 'false':
        setDarkMode(false);
        break;
      default: 
        setDarkMode(prefersDarkMode);
      }
      firstRender.current=false;
    }else {
      // if this fires because the user changes its prefered color scheme while the app is running reflect that change and ignore the local storage value
      setDarkMode(prefersDarkMode);
    }
    
  }, [prefersDarkMode]);

  const value = React.useMemo(() => ({
    darkMode,
    toggle: () => setDarkMode((mode) => !mode),
  }), [darkMode]);

  return <DarkThemeContext.Provider value={value}>{children}</DarkThemeContext.Provider>;
};


export default DarkThemeProvider;