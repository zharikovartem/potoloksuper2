const ADD_ORDER = 'ADD-ORDER'
const CHANGE_NAME_IN_ORDER_PROMO = 'CHANGE-NAME-IN-ORDER-PROMO';
const CHANGE_PHONE_IN_ORDER_PROMO = 'CHANGE-PHONE-IN-ORDER-PROMO';


let initialState = {
    orderPromo: {
        phoneDefault: 'Введите телефон', 
        nameDefault: 'Введите имя'
    }
};

const orderPromoReducer = (state = initialState, action) => {
    console.log('orderPromoReducer'+action.type);
    switch (action.type) {
        case ADD_ORDER:
            console.log(ADD_ORDER)
            return state;
        case CHANGE_NAME_IN_ORDER_PROMO:
            state.orderPromo.nameDefault = action.name;
            // debugger;
            return state;
        case CHANGE_PHONE_IN_ORDER_PROMO:
            state.orderPromo.phoneDefault = action.phone;
            return state;
    
        default:
            return state;
    }
}

export const addOrderActionCreator = () => ({type: ADD_ORDER})

export const cangeNameInOrderPromoActionCreator = (name) => {
    console.log(name);
    return (
        {
            type: CHANGE_NAME_IN_ORDER_PROMO, 
            name: name}
        )
}

export const cangePhoneInOrderPromoActionCreator = (phone) => {
    return {
        type: CHANGE_PHONE_IN_ORDER_PROMO, 
        phone: phone
    }
}

export default orderPromoReducer;