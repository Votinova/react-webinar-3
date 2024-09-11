import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    { code: Math.floor(Math.random() * 1000), title: 'Название элемента', counter: 0 },
    { code: Math.floor(Math.random() * 1000), title: 'Некий объект', counter: 0 },
    { code: Math.floor(Math.random() * 1000), title: 'Заголовок', counter: 0 },
    { code: Math.floor(Math.random() * 1000), title: 'Очень длинное название элемента из семи слов', counter: 0 },
    { code: Math.floor(Math.random() * 1000), title: 'Запись', counter: 0 },
    { code: Math.floor(Math.random() * 1000), title: 'Шестая запись', counter: 0 },
    { code: Math.floor(Math.random() * 1000), title: 'Седьмая запись', counter: 0 },
  ],
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
