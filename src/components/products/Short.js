import React from 'react';
import {Link} from 'react-router-dom';

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

                <p style={{marginTop: '50px'}}>
                    Ниже можно посмотреть скриншоты.
                    <br/>
                    Стоимость - <b>{item.price} рублей</b> без установки.
                    <br/>
                    <small>
                        Инструкция по установке в комплекте, если вам нужно установить плагин - напишите <Link to="/">мне</Link>.
                        <br/>
                        Оплата картой или Яндекс.Деньгами. Плагин пришлю на почту. <Link to="/">Пишите</Link>, если что-то нужно узнать.
                    </small>
                </p>

                <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                    <input type="hidden" name="receiver" value="410011318399972" />
                    <input type="hidden" name="formcomment" value={item.payComment} />
                    <input type="hidden" name="short-dest" value={item.payComment} />
                    <input type="hidden" name="label" value={item.id} />
                    <input type="hidden" name="quickpay-form" value="shop" />
                    <input type="hidden" name="targets" value={'Оплата ' + item.payComment} />
                    <input type="hidden" name="sum" value={item.price} />
                    <input type="hidden" name="comment" value={item.payComment} />
                    <input type="hidden" name="need-email" value="true" />
                    <button type="submit">Купить</button>
                </form>
            </div>
        </section>
    )
}

export default Header;