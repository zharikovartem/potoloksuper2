import React from 'react';
import st from './Layer1.module.css';

const Layer1 = () => {
    return(
        <div className={st.Layer1}>
            <h2 className={st.h}>
                Сделайте Ваш дом теплее и уютнее с нашими натяжными потолкам
            </h2>
            <p className={st.p}>
                Производство и монтаж натяжных потолков по доступным ценам <br/>
                с гарантией 20 лет в Минске
            </p>
        </div>
    );
}

export default Layer1;