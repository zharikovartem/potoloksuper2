import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addOrder, changeNameInOrderPromo, changePhoneInOrderPromo } from './Redux/State';
import { BrowserRouter } from 'react-router-dom';
import dataToTree from './Redux/State';

export let rerenderEntireTree = (data) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App data={data} addOrder={addOrder}
                    changeNameInOrderPromo={changeNameInOrderPromo}
                    changePhoneInOrderPromo={changePhoneInOrderPromo}>
                </App>
            </BrowserRouter>
            , document.getElementById('root'))
    );
};

export let rerenderOrder = (orders) => {
    return (
        ReactDOM.render(
            <div>
                Новый заказ от {orders.name}. Тел: {orders.phone}
                <button onClick={() => rerenderEntireTree(dataToTree)}>OK</button>
            </div>
            , document.getElementById('root'))
    );
};