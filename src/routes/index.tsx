import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import History from '../pages/History';

const Routes: React.FC = () => (
    <Router>
    <Switch>
            <Route path="/" exact component={Dashboard} ></Route>
            <Route path="/history/:id" component={History} ></Route>
    </Switch>
    </Router>
);

export default Routes;