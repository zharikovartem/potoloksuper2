import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, { subscribeTree, subscribeOrder, addOrder, changeNameInOrderPromo, changePhoneInOrderPromo }
    from './Redux/State';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App data={store.getState()}
                    addOrder={store.addOrder.bind(store)}
                    changeNameInOrderPromo={store.changeNameInOrderPromo.bind(store)}
                    changePhoneInOrderPromo={store.changePhoneInOrderPromo.bind(store)}>
                </App>
            </BrowserRouter>
            , document.getElementById('root'))
    );
};

let rerenderOrder = (orders) => {
    return (
        ReactDOM.render(
            <div>
                Новый заказ от {orders.name}. Тел: {orders.phone}
                <button onClick={() => rerenderEntireTree(store)}>OK</button>
            </div>
            , document.getElementById('root'))
    );
};

rerenderEntireTree(store);

store.subscribeTree(rerenderEntireTree);
store.subscribeOrder(rerenderOrder);

serviceWorker.unregister();
