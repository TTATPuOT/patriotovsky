import React from 'react';
import parkLogo from '../../img/cases/park/logo.jpg';
import pulsarLogo from '../../img/cases/pulsar/logo.jpg';
import photoLogo from '../../img/cases/photo/logo.jpg';

import {Link} from "react-router-dom";

function Cases() {
    return (
        <section className="cases">
            <p>Мои проекты</p>
            <p>
                Самые крутые кейсы описаны здесь.
                <br/>
                Если нужно больше - есть ещё на <a rel="noopener noreferrer" href="https://www.fl.ru/users/easyforus/" target="_blank">FL.ru</a>
            </p>

            <div className="container">
                <div className="row">
                    <div className="column">
                        <img src={parkLogo} alt="Московский парк Сказка" />
                        <p>
                            Система оплаты, бронирования<br/> и Wi-Fi авторизации для парка<br/> аттракционов в Москве
                        </p>
                        <Link to="/cases/1">Подробнее</Link>
                    </div>
                    <div className="column">
                        <img src={pulsarLogo} alt="Аниме-магазин Pulsar.ua" />
                        <p>
                            Боты в мессенджерах для автоматизации<br/> ответов от самого большого аниме<br/> магазина на
                            Украине
                        </p>
                        <Link to="/cases/2">Подробнее</Link>
                    </div>
                    <div className="column">
                        <img src={photoLogo} alt="Детская фотостудия Непоседы" />
                        <p>
                            Высоконагруженный сервис для клиентов<br/> и автоматизация бизнес-процессов<br/> для сети детских фотосутдий
                        </p>
                        <Link to="/cases/3">Подробнее</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cases;
