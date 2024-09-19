import React from 'react'
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

export default React.memo(Footer);