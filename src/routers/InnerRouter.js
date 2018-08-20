import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Settings from '../pages/Settings';

const InnerRoute = ({ setLoading, loading }) => (
    <div style={{height: '100%'}}>
      <Switch>
        <Route path="/" render={(props) => <Home {...props} setLoading={setLoading} loading={loading} />} exact />
        <Route path="/booking" render={(props) => <Booking {...props} setLoading={setLoading} loading={loading} />} />
        <Route path="/settings" render={(props) => <Settings {...props} setLoading={setLoading} loading={loading} />} />
      </Switch>
    </div>

);

export default InnerRoute;
