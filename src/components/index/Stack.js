import React from 'react';

function Stack() {
    return (
        <section className="stack" id="stack">
            <div className="php">
                <div className="container">
                    <p>PHP</p>
                    <p>
                        WordPress
                        <br/>
                        OpenCart
                        <br/>
                        Composer
                        <br/>
                        Smarty/Blade
                        <br/>
                        Laravel
                        <br/>
                        MySQL
                        <br/>
                        Doctrine
                    </p>
                </div>
            </div>
            <div className="js">
                <div className="container">
                    <p>JavaScript</p>
                    <p>
                        HTML, JS, jQuery
                        <br/>
                        CSS/Less/SCSS/<b>Sass</b>
                        <br/>
                        Bootstrap 3/4
                        <br/>
                        NPM
                        <br/>
                        Gulp/Webpack
                        <br/>
                        Node.js
                        <br/>
                        React
                        <br/>
                        Electron
                        <br/>
                        Express
                    </p>
                </div>
            </div>

            <div className="comment">
                *это мой стек, если что.
                <br/>
                +git, канбан и ещё куча всего по мелочи
            </div>
        </section>
    );
}

export default Stack;
