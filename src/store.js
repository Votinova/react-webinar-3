import { generateCode } from './utils';

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem(code) {
    let i = this.state.list.find(item => item.code === code)
    let item = this.state.cart.find(item => item.code === i.code)
    if (item) {
        item.count +=1;
    } else {
      this.state.cart.push({...i, count: 1})
    }
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    let i = this.state.cart.find(item => item.code === code);
    i.count = 0;
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter(item => item.code !== i.code),
    }); 
  }
}


export function counterPrice (list) {
  let obj = {
    sum: 0,
    count: 0
  }
  for (let item of list) {
      obj.sum +=item.price * item.count;
  }
  obj.count = list.length;
  return obj
}

export default Store;
