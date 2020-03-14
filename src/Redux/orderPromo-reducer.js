const ADD_ORDER = 'ADD-ORDER'
const CHANGE_NAME_IN_ORDER_PROMO = 'CHANGE-NAME-IN-ORDER-PROMO';
const CHANGE_PHONE_IN_ORDER_PROMO = 'CHANGE-PHONE-IN-ORDER-PROMO';

const orderPromoReducer = (state, action) => {
    // console.log(action.type)
    // console.log(state.nameDefault)
    // if (action.type === ADD_ORDER) {
    //     console.log(ADD_ORDER)
    // } else if (action.type === CHANGE_NAME_IN_ORDER_PROMO) {
    //     state.nameDefault = action.name;
    // } else if (action.type === CHANGE_PHONE_IN_ORDER_PROMO) {
    //     console.log(action.phone)
    //     state.phoneDefault = action.phone;
    // }

    switch (action.type) {
        case ADD_ORDER:
            console.log(ADD_ORDER)
            return state;
        case CHANGE_NAME_IN_ORDER_PROMO:
            state.nameDefault = action.name;
            return state;
        case CHANGE_PHONE_IN_ORDER_PROMO:
            state.phoneDefault = action.phone;
            return state;
    
        default:
            return state;
    }
}

export default orderPromoReducer;