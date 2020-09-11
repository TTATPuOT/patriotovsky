import React from 'react';

function Other() {
    return (
        <section className="other">
            <p>Разработки «Для себя»</p>

            <div className="project">
                <h3><a rel="noopener noreferrer" href="https://whattoplay.fun/" target="_blank">What to play</a></h3>
                <p>
                    Небольшое приложение на React, которое работает на базе API IGDB для поиска интересных компьютерных игр.<br />
                    <a rel="noopener noreferrer" href="https://github.com/TTATPuOT/what-to-play" target="_blank">Исходный код</a> есть у меня на GitHub аккаунте.
                </p>
            </div>

            <div className="project">
                <h3><a rel="noopener noreferrer" href="https://patriotovsky.ru/compare/" target="_blank">Сравнение цен</a></h3>
                <p>
                    В условиях самоизоляции и жёсткого кризиса правильным будет начать смотреть на стоимость продуктов в магазине. Чтобы делать это было проще - создал простое приложение на React, которое реализует методолгию PWA. Приложение сравнивает цены и вес продукта, чтобы определить, что выгоднее взять.<br/>
                    Приложение можно удобно сохранить на главный экран смартфона и пользоватся как самым обычным приложением.<br/>
                    <a rel="noopener noreferrer" href="https://github.com/TTATPuOT/price-compare" target="_blank">Исходный код</a> есть у меня на GitHub аккаунте.
                </p>
            </div>

            <div className="project">
                <h3><a rel="noopener noreferrer"  href="https://csgo-analytics.ru/" target="_blank">CSGO-Analytics.ru</a></h3>
                <p>
                    Сервис для игроков в компьютерную онлайн-игру Counter-Strike: Global Offensive. <br/>
                    Позволяет записывать результаты и анализировать их. Используются элементы машинного обучения. И это
                    всё на PHP, на секундочку. <br/>
                    Также, были написаны расширения для сервиса онлайн-трансляций Twitch. <br/>
                    <a rel="noopener noreferrer"  href="https://www.twitch.tv/ext/zyt20fl337b4xbaisl72m23j5ipkce-0.1.0"
                       target="_blank">Оверлей</a> и <a rel="noopener noreferrer" href="https://www.twitch.tv/ext/fw3xzmoe7jgzc4w6mnwhznvq9rkr3g-0.0.2" target="_blank">панель</a>.
                </p>
            </div>

            <div className="project">
                <h3><a rel="noopener noreferrer" href="https://strongbots.ru" target="_blank" className="disabled">StrongBots.ru</a></h3>
                <p>
                    Сервис уже не работает, да и никогда толком не работал. Тем не менее, я задумывал его как удобный и
                    простой конструктор ботов для мессенджеров. Так и было. Но я слишком был занят другими проектами.
                    Сейчас ниша занята аналогами не хуже.
                </p>
            </div>

            <div className="project">
                <h3><a rel="noopener noreferrer" href="https://github.com/TTATPuOT/FishGulpBootstrap" target="_blank">Удобная рыба для Gulp</a>
                </h3>
                <p>
                    Простенькая заготовка для Gulp, чтобы было удобно верстать лично мне.
                </p>
            </div>

            <div className="project">
                <h3>Несколько YouTube-каналов</h3>
                <p>
                    Всегда испытывал симпатию к профессии телеведущих, дикторов и журналистов. <br/>
                    «<a rel="noopener noreferrer" href="https://www.youtube.com/neverov11" target="_blank">Патриотовский канал</a>» - канал об
                    аниме <br/>
                    «<a rel="noopener noreferrer" href="https://youtube.com/easy4us" target="_blank">EasyForUs</a>» - канал об онлайн-игре
                    CS:GO <br/>
                    «<a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCq4ecB0VFOcIQATiIJ_X7Vw" target="_blank">Антон Неверов об
                    играх</a>» - канал о компьютерных играх в принципе
                </p>
            </div>
        </section>
    );
}

export default Other;
