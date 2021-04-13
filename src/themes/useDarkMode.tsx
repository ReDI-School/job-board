import {useContext } from 'react';


import DarkThemeContext from './DarkThemeContext';


const useDarkMode = () => {
  const {darkMode, toggle} = useContext(DarkThemeContext);

  return {darkMode, toggle};
};

export default useDarkMode;