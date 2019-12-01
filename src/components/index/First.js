import React from 'react';

function scrollToStack(event) {
    event.preventDefault();

    window.scrollTo({
        top: document.getElementById('stack').offsetTop,
        behavior: "smooth"
    });
}

function First() {
    return (
        <section className="first">
            <div className="avatar">
                <img src="/img/me.jpg" alt="Ну, типа, я" />
                <div className="point" />
            </div>

            <h1>
                Антон Неверов
                <br />
                FullStack Web Developer
            </h1>

            <h2>
                Боты, платежи, API, онлайн-сервисы
                <br />
                PHP, Node.js, MySQL, React
                <br />
                4 года опыта работы
                <br/><br/><br/>
                <small>
                    Скрипты и стили сайта не минифицированы,
                    <br/>
                    а исходный код доступен на <a rel="noopener noreferrer" href="https://github.com/TTATPuOT/patriotovsky" target="_blank">GitHub</a> для оценки
                </small>
            </h2>

            <div className="socials">
                <a rel="noopener noreferrer" href="https://bitbucket.org/TTATPuOT/" target="_blank"><img src="/img/bb.svg" alt="BitBucket" /></a>
                <a rel="noopener noreferrer" href="https://vk.com/ttatpuot" target="_blank"><img src="/img/vk.svg" alt="Вконтакте" /></a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/neverov12/" target="_blank"><img src="/img/in.svg" alt="LinkedIn" /></a>
                <a rel="noopener noreferrer" href="https://github.com/TTATPuOT" target="_blank"><img src="/img/gh.svg" alt="GitHub" /></a>
                <a rel="noopener noreferrer" href="https://toster.ru/user/TTATPuOT" target="_blank"><img src="/img/toster.svg" alt="Toster" /></a>
            </div>

            <div className="email"><a href="mailto:neverov12@gmail.com">neverov12@gmail.com</a></div>

            <div className="scroll">
                <a href="#stack" onClick={scrollToStack}><img src="/img/mouse.jpg" alt="Листай вниз, там больше" /></a>
            </div>
        </section>
    );
}

export default First;