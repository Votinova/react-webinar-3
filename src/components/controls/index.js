import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ onAdd, text }) {
  return (
    <div className="Controls">
      <button onClick={() => onAdd()}>{text}</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
  text: PropTypes.string
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Controls);
