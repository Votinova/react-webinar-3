import React from "react";
import './style.css'
import { counterPrice, plural } from "../../utils";

function Title ({children, list}) {
    let sum = counterPrice(list);
    return (
        <div className="title">
            <span>В корзине:</span>
            <h1> {list.length} {plural(list.length, {one: 'товар', few: 'товара', many: 'товаров'})} / {sum} ₽</h1>
            {children}
        </div>
    )
}


export default React.memo(Title);