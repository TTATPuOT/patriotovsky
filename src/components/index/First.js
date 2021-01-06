import React from 'react';
import meImage from './img/me.jpg';
import bbImage from './img/bb.svg';
import ghImage from './img/gh.svg';
import inImage from './img/in.svg';
import vkImage from './img/vk.svg';
import tosterImage from './img/toster.svg';
import mouseImage from './img/mouse.jpg';

function scrollToStack(event) {
    event.preventDefault();

    window.scrollTo({
        top: document.getElementById('stack').offsetTop,
        behavior: "smooth"
    });
}

function First() {
    return <section className="first">
        <div className="avatar">
            <img src={meImage} alt="Ну, типа, я" />
        </div>

        <h1>
            Антон Неверов
            <br />
            Веб-разработчик
        </h1>

        <h2>
            PHP, Node.js, MySQL, React
            <br />
            5 лет опыта работы
            <br/><br/><br/>
            <small>
                Исходный код страницы доступен на <a rel="noopener noreferrer" href="https://github.com/TTATPuOT/patriotovsky" target="_blank">GitHub</a> для оценки
            </small>
        </h2>

        <div className="socials">
            {/*<a rel="noopener noreferrer" href="https://bitbucket.org/TTATPuOT/" target="_blank"><img src={bbImage} alt="BitBucket" /></a>*/}
            <a rel="noopener noreferrer" href="https://vk.com/ttatpuot" target="_blank"><img src={vkImage} alt="Вконтакте" /></a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/neverov12/" target="_blank"><img src={inImage} alt="LinkedIn" /></a>
            <a rel="noopener noreferrer" href="https://github.com/TTATPuOT" target="_blank"><img src={ghImage} alt="GitHub" /></a>
            <a rel="noopener noreferrer" href="https://toster.ru/user/TTATPuOT" target="_blank"><img src={tosterImage} alt="Toster" /></a>
        </div>

        <div className="email"><a href="mailto:neverov12@gmail.com">neverov12@gmail.com</a></div>

        <div className="scroll">
            <a href="#stack" onClick={scrollToStack}><img src={mouseImage} alt="Листай вниз, там больше" /></a>
        </div>
    </section>
}

export default First;
