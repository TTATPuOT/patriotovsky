import React from 'react';

function Features(props) {
    let item = props.case;
    return (
        <section className="features">
            <div className="header">Особенности проекта</div>
            {item.features}
        </section>
    )
}

export default Features;