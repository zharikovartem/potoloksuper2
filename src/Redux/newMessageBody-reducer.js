const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
// const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';

let initialState = {
    newMessageBody:'Введите сообщение'
};

const newMessageBodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            // state.newMessageBodyReducer.newMessageBody = action.messegeText;
            state = action.messegeText;
            // debugger;
            return state;
    
        default:
            return state;
    }
}

export const changeMessageTextActionCreator = (text) => {
    // console.log('changeMessageText: '+text)
    return {
        type: CHANGE_MESSAGE_TEXT,
        messegeText: text
    }
}



export default newMessageBodyReducer;