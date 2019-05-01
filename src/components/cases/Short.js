import React from 'react';

function Header(props) {
    let item = props.case;
    let type = props.type;
    return (
        <section className={"description" + (type === 1 ? '' : ' blue')}>
            <h3>{type === 1 ? 'Кратко' : 'Результаты'}</h3>
            <div className="text">

                {type === 1 ? (
                    item.short
                ) : (
                    item.result
                )}
            </div>
        </section>
    )
}

export default Header;