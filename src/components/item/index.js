import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item(props) {
  const callbacks = {
    onClickBtn: e => {
      e.stopPropagation();
      props.onClick(props.item);
    },
  };

  return (
    <div className='Item'>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">
        {props.item.title}{' '}
      </div>
      <div className='Item-price'>
        {props.item.price} ₽
      </div>
      {props.text === 'Удалить'? <div className='Item-num'>{props.item.count} шт</div> : ''}
      <div className="Item-actions">
        <button onClick={callbacks.onClickBtn}>{props.text}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
};

export default React.memo(Item);
