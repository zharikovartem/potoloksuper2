import React from 'react';
import st from'./Block1.module.css';
import bage from './bage.png';

const Block1 = () => {
    return (
        <div className={st.Block1}>
            <div className={st.BadeFoto} >
                <img className={st.Bage} src={bage}></img>
            </div>
            

            <div className={st.Block1_content}>
                <p className={st.p1}>АКЦИЯ <br/>"КАРНИЗ В ПОДАРОК"</p>
                <p className={st.p2}>"Пластиковый карниз" в подарок и специальная цена на все виды натяжных потолков!</p>
            </div>

            <div className={st.Order1}>
                <div className={st.Order2}></div>
            </div>

        </div>
    )
}

export default Block1;