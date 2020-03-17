import React from 'react';
import st from './Block8.module.css';
import { changeMessageTextActionCreator } from '../../Redux/newMessageBody-reducer';
import {sendMessageTextActionCreator} from '../../Redux/message-reducer'

const Block8 = (props) => {
    let messageText = React.createRef();

    let onSendMassegeClick = (event) => {
        let newMessageBody  = messageText.current.value;
        // debugger;
        props.dispatch(sendMessageTextActionCreator(newMessageBody));
    }


    let onChangeMessegeBodyChange = (event) => {
        let text  = event.target.value;
        // console.log(text)
        
        let test = props.dispatch(changeMessageTextActionCreator(text));
        // debugger;
    }

    let messages = props.data.messageReducer.messages;
    // console.log(props.data)
    // console.log(messages)
    // debugger;
    let messagesBlock = messages.map(function(item) {
        return(
            <div>
                <span>({item.id})from: {item.sender} to: {item.target}</span><br/>
                <span><b>{item.text}</b></span>
                <br/>
            </div>
        )
    });
    // let a = props;
    // debugger;
    return (
        <div className={st.Block8}>
            <div>
                <textarea
                    ref={messageText}
                    value={props.data.newMessageBodyReducer.newMessageBody}
                    onChange={onChangeMessegeBodyChange}
                ></textarea>
            </div>
            <div>
                <button onClick={onSendMassegeClick}>Отправить</button>
            </div>
            <div>
                {messagesBlock}
            </div>
        </div>
    )
}

export default Block8;