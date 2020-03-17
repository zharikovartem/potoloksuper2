import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import store from './Redux/State';
import store from './Redux/redux-store';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {
    let test = store.getState();
    console.log(test.orderPromoReducer.orderPromo.nameDefault);
    console.log(test.orderPromoReducer.nameDefault);
    // debugger;
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App data={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                >
                </App>
            </BrowserRouter>
            , document.getElementById('root'))
    );
};

// let rerenderOrder = (store) => {
//     console.log(store);
//     debugger;
//     // console.log(store.getState());
//     return (
//         ReactDOM.render(
//             <div>
//                 {/* Новый заказ от {state.name}. Тел: {orders.phone} */}
//                 Новый заказ от {store.orderPromo.nameDefault}. Тел: {store.orderPromo.phoneDefault}
//                 <button onClick={() => rerenderEntireTree(store)}>OK</button>
//             </div>
//             , document.getElementById('root'))
//     );
// };

rerenderEntireTree(store);

// store.subscribeTree(rerenderEntireTree); // 
store.subscribe(()=>{
    let state = store.getState();
    // debugger;
    rerenderEntireTree(state);
});

// store.subscribe(rerenderOrder);

serviceWorker.unregister();
