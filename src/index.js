import React from 'react';
import {render} from 'react-dom';

import ScrollToTop from 'react-router-scroll-top';

import Index from './components/index/Index';
import Cases from './components/cases/Cases';
import Products from './components/products/Products';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";

import './style.css';

function Root() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/cases/:id" component={Cases} />
                <Route exact path="/products/:id" component={Products} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

render(<Root />, document.getElementById('root'));
