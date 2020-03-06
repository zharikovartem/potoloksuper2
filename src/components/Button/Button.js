import React from 'react';
import st from './Button.module.css';

const Button = (props) => {
    return(
        <div className={st.Button}>
            <span>{props.name}</span>
        </div>
    );
}

export default Button;