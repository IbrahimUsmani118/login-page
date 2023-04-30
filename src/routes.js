import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '/components/Login';
import Registration from './components/Registration';

function Routes() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />
      </Switch>
    );
  }
  
  export default Routes;
  