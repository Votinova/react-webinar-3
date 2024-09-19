import React from 'react'
import './style.css'
import Head from '../head';
import Controls from '../controls';
import List from '../list';
import Footer from '../footer';
import { counterPrice } from '../../utils';


function Modal ({show, onClose, list, onDelete}) {

    if (!show) {
        return null
    }
  return (
    <div className="modal">
        <div className="modal-wrapper">
            <div className="modal-content">
                <Head title={'Корзина'} style={'Modal-title'}/>
                <div className='close-btn'>
                    <Controls onAdd={onClose} text={'Закрыть'}/>
                </div>
                <List  list={list} text={'Удалить'} onClick={onDelete}/>
                <div className='footer'>
                    <Footer sum={counterPrice(list)}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Modal);