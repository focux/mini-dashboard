import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Settings from '../pages/Settings';

const InnerRoute = () => (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/booking" component={Booking} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>

);

export default InnerRoute;
