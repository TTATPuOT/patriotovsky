import React from 'react';
import {Link} from "react-router-dom";

function Buy() {
    return (
        <section className="other white">
            <p>What are you buying?</p>

            <div className="project">
                <h3><Link to="/products/1">Эквайринг Райффайзен банка для WooCommerce</Link></h3>
                <p>
                    Плагин был написан для клиента, но получился очень хорошим и умным. Поэтому было решено его доработать.
                    <br/>
                    Сейчас плагин полностью готов к использованию на готовых проектах, платежи принимает исправно, никаких нареканий у заказчика нет, сайт работает более года.
                </p>
            </div>
        </section>
    );
}

export default Buy;