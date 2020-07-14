import React from 'react';

import {Link} from "react-router-dom";

function Header(props) {
    const item = props.case;

    return (
        <section className="banner" style={{backgroundImage: `url(${item.banner})`}}>
            <div className="header">
                <Link to="/">На главную</Link>
                patriotovsky.ru
            </div>

            <h1>{item.name}</h1>
            <h2>{item.stack}</h2>
            <h3>{item.additional}</h3>
        </section>
    )
}

export default Header;
