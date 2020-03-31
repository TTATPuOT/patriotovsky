import React from 'react';

function Stack() {
    return (
        <section className="stack" id="stack">
            <div className="php">
                <div className="container">
                    <p>PHP</p>
                    <p>
                        Composer
                        <br/>
                        Smarty
                        <br/>
                        WordPress
                        <br/>
                        OpenCart
                        <br/>
                        MySQL
                    </p>
                </div>
            </div>
            <div className="js">
                <div className="container">
                    <p>JavaScript</p>
                    <p>
                        HTML/CSS
                        <br/>
                        Bootstrap 3/4
                        <br/>
                        NPM
                        <br/>
                        Gulp
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
