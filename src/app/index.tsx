import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Login from './pages/Login';
import apiInterceptors from '../core/services/utils/interceptors';
import history from '../core/services/utils/history';
import { store } from '../core/store/configureStore';

const ProtectedRoutes = ({ children }: any) => {
  const { token } = store.getState().auth;
  if (!token) {
    return <Redirect to="/login"/>;
  }

  return children;
};

export function App() {
  apiInterceptors.onExpireToken();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={'/login'} component={Login}/>
        <ProtectedRoutes>
          <Header/>
          <Route exact path={'/'} component={HomePage}/>
        </ProtectedRoutes>
      </Switch>
    </Router>
  );
}
