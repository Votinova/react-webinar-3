import React from 'react'
import './style.css'
import PropTypes from 'prop-types'


function Modal ({children, show}) {

    if (!show) {
        return null
    }
  return (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>
  )
}

Modal.propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool
}


export default React.memo(Modal);
