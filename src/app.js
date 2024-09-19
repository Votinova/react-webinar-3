import React, { useCallback, useState } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Modal from './components/modal';
import Title from './components/title';

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

  return (
    <PageLayout>
      <Head title="Приложение на чистом JS" style={'Head'}/>
      <div>
        <Title list={cart}>
          <Controls onAdd={callbacks.onShow} text={'Перейти'}/>
        </Title>
      </div>
      <List
        list={list}
        onClick={callbacks.onAddItem}
        text={'Добавить'}
      />
      <Modal show={show} onClose={callbacks.onClose} list={cart} onDelete = {callbacks.onDeleteItem}/>
    </PageLayout>
  );
}

export default App;
