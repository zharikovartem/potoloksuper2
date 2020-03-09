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
                <div className={st.Order2}>
                    <p className={st.p3}>ЗАЯВКА НА ПОДАРОК</p>
                    <p className={st.p4}>для получения оставьте свои контактные данные и наш менеджер свяжется с Вами</p>

                    <div className={st.Input_block}>
                        <labe className={st.p4}>Ваше имя:</labe><br/>
                        <input className={st.input}></input>
                    </div>
                    <div className={st.Input_block}>
                        <labe className={st.p4}>Ваш телефон:</labe><br/>
                        <input className={st.input}></input>
                    </div>
                    <div className={st.button}>
                        <a href="#">ПОЛУЧТЬ ПОДАРОК</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Block1;