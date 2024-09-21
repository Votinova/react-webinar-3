import React from "react";
import './style.css'
import PropTypes from 'prop-types';
import { plural } from "../../utils";

function Title ({children, list, sum, count}) {
    return (
        <div className="title">
            <span>В корзине:</span>
            {count !== 0? <h1> {count} {plural(list.length, {one: 'товар', few: 'товара', many: 'товаров'})} / {sum} ₽</h1>: <h1>пусто</h1>}
            {children}
        </div>
    )
}

Title.propTypes = {
    children: PropTypes.node,
    list: PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.number,
        }),
      ).isRequired,
    sum: PropTypes.number,
    count: PropTypes.number

}

export default React.memo(Title);