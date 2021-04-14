import React from 'react';
import Home from './pages/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { JobPageRoute } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import useDarkMode from './themes/useDarkMode';

const App = () => {

  const { darkMode } = useDarkMode();
  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>

      <BrowserRouter>
        <CssBaseline />
        <Switch>
          <Route path="/job/:jobId">
            <JobPageRoute />
          </Route>
          <Route path="/add">
            <AddJobPage />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
};

export default App;
