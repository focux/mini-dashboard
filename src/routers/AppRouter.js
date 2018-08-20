import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from '../pages/LoginPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
