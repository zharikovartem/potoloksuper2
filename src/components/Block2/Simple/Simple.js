import React from 'react';
import st from'./Simple.module.css';

const Simple = () => {
    return (
        <div className={st.Simple}>
            <div>
                <p className={st.p1}>ХАРАКТЕРИСТИКИ:</p>
            </div>
            <div className={st.Image}></div>
            <div>
                <p className={st.p1}>ПРЕИМУЩЕСТВА:</p>
            </div>
        </div>
    )
}

export default Simple;