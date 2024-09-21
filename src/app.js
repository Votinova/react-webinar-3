import React, { useCallback, useState } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Modal from './components/modal';
import Title from './components/title';
import { counterPrice } from './store';
import Footer from './components/footer';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store}) {
  const list = store.getState().list;
  const cart = store.getState().cart;
  const [show, setShow] = useState(false);
  const callbacks = {
    onAddItem: useCallback(
      code=> {
        store.addItem(code);
      },
      [store],
    ),
    onDeleteItem: useCallback (
      code => {
        store.deleteItem(code);
      },
      [store]
    ),
    onShow: () => {
      setShow(true)
    },
    
    onClose: () => {
      setShow(false)
    }
  };

  const obj = counterPrice(cart);

  return (
    <PageLayout>
      <Head title="Магазин" style={'Head'}/>
      <div>
        <Title list={cart} sum={obj.sum} count={obj.count}>
          <Controls onAdd={callbacks.onShow} text={'Перейти'}/>
        </Title>
      </div>
      <List
        list={list}
        onClick={callbacks.onAddItem}
        text={'Добавить'}
      />
      <Modal show={show}>
      <Head title={'Корзина'} style={'Modal-title'}/>
                <div className='close-btn'>
                    <Controls onAdd={callbacks.onClose} text={'Закрыть'}/>
                </div>
                <div className='skip'>   
                </div>
                <List  list={cart} text={'Удалить'} onClick={callbacks.onDeleteItem}/>
                <div className='footer'>
                    <Footer sum={counterPrice(cart).sum}/>
                </div>
      </Modal>
    </PageLayout>
  );
}

export default App;
