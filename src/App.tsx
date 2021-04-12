import React from 'react';
import Home from './pages/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { JobPageRoute } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const App = () => {
  return (
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
  );
};

export default App;
