import React from 'react';
import st from './Block8.module.css';
import { changeMessageTextActionCreator, sendMessageTextActionCreator } from '../../Redux/State';


const Block8 = (props) => {
    let messageText = React.createRef();

    let onSendMassegeClick = () => {
        props.dispatch(sendMessageTextActionCreator());
    }


    let onChangeMessegeBodyChange = (event) => {
        let text  = event.target.value;
        // console.log(text)
        props.dispatch(changeMessageTextActionCreator(text));
    }

    let messages = props.data.messages;
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

    return (
        <div className={st.Block8}>
            <div>
                <textarea
                    ref={messageText}
                    value={props.data.newMessageBody}
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