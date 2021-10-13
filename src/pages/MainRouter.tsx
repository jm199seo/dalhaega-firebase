import Main from 'components/Main';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const MainRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <Main />
      </Route>
    </Switch>
  </Router>
);

export default MainRouter;
