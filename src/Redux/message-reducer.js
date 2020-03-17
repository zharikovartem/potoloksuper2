const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';


let initialState = {
    messages: [
        {
            id: '0',
            sender: 'Artem',
            target: 'Tanya',
            text: 'test Message'
        }
    ],
    newMessageBody:'Введите сообщение'
};
// let initialNewMessageBody = {
//     newMessageBody:'Введите сообщение'
// }

const messageReducer = ( state = initialState, action ) => {
    let test = state;
    switch (action.type) {
        case SEND_MESSAGE_TEXT:
            // debugger;
            state.messages.push({
                id: state.length,
                sender: 'Tanya',
                target: 'Artem',
                text: action.newMessageBody
            })
            state.newMessageBody = '';
            return state;
    
        default:
            return state;
    }
}

export const sendMessageTextActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE_TEXT,
        newMessageBody: newMessageBody
    }
}

export default messageReducer;