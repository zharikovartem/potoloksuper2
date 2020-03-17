import { createStore, combineReducers } from "redux";
import messageReducer from "./message-reducer";
import orderPromoReducer from "./orderPromo-reducer";
import newMessageBodyReducer from "./newMessageBody-reducer";
import productTypesReducer from "./productTypes-reducer"

// 

let reducers = combineReducers({
    messageReducer,
    orderPromoReducer,
    newMessageBodyReducer,
    productTypesReducer
});
let store = createStore(reducers);

// 
// console.log(messageReducer);
// debugger;

export default store;