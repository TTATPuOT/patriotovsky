import React from 'react';
import Header from './Header';
import Short from './Short';
import Features from './Features';
import Footer from './Footer';
import Data from './Data';

import NotFound from '../NotFound';

function Products({ match: { params } }) {
    const caseId = parseInt(params.id) - 1;
    if (Data[caseId] !== undefined) {
        return (
            <div>
                <Header case={Data[caseId]} />
                <Short case={Data[caseId]} type={1} />
                <Features case={Data[caseId]} />
                <Footer />
            </div>
        );
    } else{
        return (
            <NotFound />
        )
    }
}

export default Products;