import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import apiInterceptors from '../core/services/utils/interceptors';
import history from '../core/services/utils/history';


export function App() {
  apiInterceptors.onExpireToken();
  return (
    <Router history={history}>
      <Switch>

      </Switch>
    </Router>
  );
}
