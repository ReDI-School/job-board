import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';

import useDarkMode from '../themes/useDarkMode';

export default function ThemeSwitcher() {

  const { darkMode, toggle } = useDarkMode();

  return (
    <IconButton onClick={toggle} title={`Switch to ${ darkMode ? 'light' : 'dark'} mode`}>
      {darkMode ? <Brightness3Icon/> : <Brightness5Icon/>}
    </IconButton>
  );
}
