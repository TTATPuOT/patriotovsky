import React from 'react';

const Data = [
    {
        id: 1,
        name: 'Интеграция Райффайзен банка и WooCommerce (WordPress)',
        stack: 'WooCommerce версии 3.0.2 и выше',
        additional: 'Для использования нужно заключить договор с банком Райффайзен',
        banner: '/img/products/bank/bg.jpg',
        short: (
            <p>
                Позволяет принимать платежи черех эквайринг Райффайзен-банка.
                <br/>
                <br/>
                Очень прост в установке и использовании, не требует обновлений или доработок.
                <br/>
                <br/>
                Все типы платежей и статусы операций поддерживаются и отображаются в панели управления заказами.
            </p>
        ),
        result: null,
        features: (
            <div className="container">
                <div className="center">
                    <img src="/img/products/bank/1.png" alt="В списке платёжных систем WooCommerce" />
                    <p>В списке платёжных систем WooCommerce</p>
                </div>
                <div className="center">
                    <img src="/img/products/bank/2.png" alt="Страница настроек" />
                    <p>Страница настроек</p>
                </div>
                <div className="center">
                    <img src="/img/products/bank/3.png" alt="На странице оплаты" />
                    <p>На странице оплаты</p>
                </div>
            </div>
        ),
        price: '1000',
        payComment: 'Плагин для WooCommerce, интеграция Райффайзен'
    }
];

export default Data;