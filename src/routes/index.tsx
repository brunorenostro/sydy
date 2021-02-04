import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import History from '../pages/History';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/history" component={History}></Route>
    </Switch>
);

export default Routes;