import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ title, style }) {
  return (
    <div className={style}>
      <h1>{title}</h1>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string
};

export default React.memo(Head);
