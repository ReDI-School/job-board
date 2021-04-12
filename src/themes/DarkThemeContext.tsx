import React from 'react';


type DarkThemeContextValue = {
    darkMode: boolean,
    toggle: () => void
}

const DarkThemeContext = React.createContext < DarkThemeContextValue > ({
    darkMode: false,
    toggle: () => {
        return;
    }
});

export default DarkThemeContext;