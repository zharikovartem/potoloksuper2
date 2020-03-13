const ADD_ORDER = 'ADD-ORDER'
const CHANGE_NAME_IN_ORDER_PROMO = 'CHANGE-NAME-IN-ORDER-PROMO';
const CHANGE_PHONE_IN_ORDER_PROMO = 'CHANGE-PHONE-IN-ORDER-PROMO';

const orderPromo = (state, action) => {
    if (action.type === ADD_ORDER) {
        this.rerenderOrder(this._state);
    } else if (action.type === CHANGE_NAME_IN_ORDER_PROMO) {
        this._state.orderPromo.nameDefault = action.name;
        this.rerenderEntireTree(this.store);
    } else if (action.type === CHANGE_PHONE_IN_ORDER_PROMO) {
        this._state.orderPromo.phoneDefault = action.phone;
        this.rerenderEntireTree(this.store);
    }
    return state;
}