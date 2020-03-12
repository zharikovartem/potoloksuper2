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
                    dispatch={store.dispatch.bind(store)}
                    // addOrder={store.addOrder.bind(store)}
                    // changeNameInOrderPromo={store.changeNameInOrderPromo.bind(store)}
                    // changePhoneInOrderPromo={store.changePhoneInOrderPromo.bind(store)}>
                >
                </App>
            </BrowserRouter>
            , document.getElementById('root'))
    );
};

let rerenderOrder = (store) => {
    console.log(store);
    // debugger;
    // console.log(store.getState());
    return (
        ReactDOM.render(
            <div>
                {/* Новый заказ от {state.name}. Тел: {orders.phone} */}
                Новый заказ от {store.orderPromo.nameDefault}. Тел: {store.orderPromo.phoneDefault}
                <button onClick={() => rerenderEntireTree(store)}>OK</button>
            </div>
            , document.getElementById('root'))
    );
};

rerenderEntireTree(store);

store.subscribeTree(rerenderEntireTree);
store.subscribeOrder(rerenderOrder);

serviceWorker.unregister();
