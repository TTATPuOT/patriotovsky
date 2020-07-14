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
                    </p>
                </div>
            </div>
            <div className="js">
                <div className="container">
                    <p>JavaScript</p>
                    <p>
                        HTML, ванильный JS
                        <br/>
                        CSS/Less/SCSS/<b>Sass</b>
                        <br/>
                        Bootstrap 3/4
                        <br/>
                        NPM
                        <br/>
                        Gulp/Webpack
                        <br/>
                        jQuery
                        <br/>
                        Node.js
                        <br/>
                        React
                        <br/>
                        Electron
                        <br/>
                        Express
                        <br/>
                        MongoDB
                    </p>
                </div>
            </div>

            <div className="comment">
                *это мой стек, если что.
                <br/>
                +Git, Kanban, само собой
            </div>
        </section>
    );
}

export default Stack;
