import React from 'react';

import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div style={{padding: 15, textAlign: 'center'}}>
            Такой страницы не бывает. Лучше вернуться на <Link to="/">главную</Link>.
        </div>
    )
}

export default NotFound;