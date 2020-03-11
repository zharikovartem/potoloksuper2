import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { rerenderEntireTree } from './render'; // удалили
import data, { subscribeTree, subscribeOrder } from './Redux/State';
import { addOrder, changeNameInOrderPromo, changePhoneInOrderPromo } from './Redux/State';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App data={data}
                    addOrder={addOrder}
                    changeNameInOrderPromo={changeNameInOrderPromo}
                    changePhoneInOrderPromo={changePhoneInOrderPromo}>
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
                <button onClick={() => rerenderEntireTree(data)}>OK</button>
            </div>
            , document.getElementById('root'))
    );
};

rerenderEntireTree(data);

subscribeTree(rerenderEntireTree);
subscribeOrder(rerenderOrder);

serviceWorker.unregister();
