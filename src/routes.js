import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Pokemon from './pages/pokemon';
import NotFound from './components/notfound';

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Main} />
            <Route path={process.env.PUBLIC_URL +'/pokemon/:id'} exact component={Pokemon} />
            <Route path={process.env.PUBLIC_URL + '*'} exact component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default routes;