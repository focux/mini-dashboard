import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
