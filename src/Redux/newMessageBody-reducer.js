const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const newMessageBodyReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            state = action.messegeText;
            return state;
    
        default:
            return state;
    }
}

export default newMessageBodyReducer;