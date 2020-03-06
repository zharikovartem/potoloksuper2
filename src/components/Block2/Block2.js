import React from 'react';
import st from'./Block2.module.css';

const Block2 = () => {
    return (
        <div className={st.Block2}>
                {/* {`${st.item} ${st.active}`}  - Засунуть 2 класса */}
                Block 2<br/>
                ВЫБЕРИТЕ ОПТИМАЛЬНЫЙ ВАРИАНТ
        </div>
    )
}

export default Block2;