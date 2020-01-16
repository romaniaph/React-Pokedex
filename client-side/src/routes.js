import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Pokemon from './pages/pokemon';

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/pokemon/:id' component={Pokemon} />
        </Switch>
    </BrowserRouter>
)

export default routes;