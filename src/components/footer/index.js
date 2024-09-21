import React from 'react'
import PropTypes from 'prop-types';
import './style.css'

function Footer ({sum}) {
  return (
    <div className='Footer'>
        <h1>
            Итого
        </h1>
        <h1>
            {sum} ₽
        </h1>
    </div>
  )
}

Footer.propTypes = {
  sum: PropTypes.number
}

export default React.memo(Footer);