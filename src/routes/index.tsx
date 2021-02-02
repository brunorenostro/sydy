import React from 'react';

import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (

    <Route path="/" component={Dashboard}></Route>
);

export default Routes;