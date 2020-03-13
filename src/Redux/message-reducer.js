const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';



const message = (state, action) => {
    if (action.type === CHANGE_MESSAGE_TEXT) {
        this._state.newMessageBody = action.messegeText;
        this.rerenderEntireTree(this.store);
    } else if (action.type === SEND_MESSAGE_TEXT) {
        console.log('new message: ' + this._state.newMessageBody)
        this._state.messages.push({
            id: this._state.messages.length,
            sender: 'Tanya',
            target: 'Artem',
            text: this._state.newMessageBody
        })
        this._state.newMessageBody = '';
        this.rerenderEntireTree(this.store);
    }
    return state;
}