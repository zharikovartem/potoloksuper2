const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';



const messageReducer = (state, newMessageBody, action) => {
    // if (action.type === SEND_MESSAGE_TEXT) {
    //     console.log('new message: ' + newMessageBody);
    //     state.push({
    //         id: state.length,
    //         sender: 'Tanya',
    //         target: 'Artem',
    //         text: newMessageBody
    //     })
    //     state.newMessageBody = '';
    // }
    switch (action.type) {
        case SEND_MESSAGE_TEXT:
            state.push({
                id: state.length,
                sender: 'Tanya',
                target: 'Artem',
                text: newMessageBody
            })
            state.newMessageBody = '';
            return state;
    
        default:
            return state;
    }
}

export default messageReducer;