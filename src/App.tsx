import React from 'react';
import Home from './pages/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router } from 'react-router-dom'; // change this back to BrowserRouter once we dont use gh pages anymore
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
      <Router> 
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
      </Router>
    </ThemeProvider>

  );
};

export default App;
