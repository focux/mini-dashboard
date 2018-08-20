import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Auth from '../services/auth';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" render={() => {
          Auth.logOut();
          return <Redirect to="/login" />
        }}
        />
        <ProtectedRoute path="/" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
