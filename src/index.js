import React from 'react';
import {render} from 'react-dom';

import ScrollToTop from 'react-router-scroll-top';

import Index from './components/index/Index';
import Cases from './components/cases/Cases';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";

function Root() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/cases/:id" component={Cases} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

render( <Root />, document.getElementById('root'));