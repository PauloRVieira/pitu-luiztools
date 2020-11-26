import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// pitu.com -> HomePage
import HomePage from '../pages/HomePage';

// pitu.com/:code -> RedirectPage
import RedirectPage from '../pages/RedirectPage';

// pitu.com/:code/stats -> StatsPage
import StatsPage from '../pages/StatsPage';

import NotFoundPage from '../pages/NotFoundPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/:code" component={ RedirectPage } />
                <Route exact path="/:code/stats" component={ StatsPage } />
                <Route path="/*" component={ NotFoundPage } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;