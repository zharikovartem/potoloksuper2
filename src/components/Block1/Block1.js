import React from 'react';
import st from'./Block1.module.css';
import promo from './promo.png';
import { addOrderActionCreator, cangeNameInOrderPromoActionCreator, cangePhoneInOrderPromoActionCreator } from '../../Redux/orderPromo-reducer';

const Block1 = (props) => {

    let nameElement = React.createRef();
    let phoneElement = React.createRef();

    let addOrder = () => {
        props.dispatch( addOrderActionCreator() );
    }

    let onNameChange = () => {
        let name = nameElement.current.value;
        let obj = cangeNameInOrderPromoActionCreator(name);
        // debugger;
        let result = props.dispatch( obj );
        // debugger;
    }

    let onPhoneChange = () => {
        let phone = phoneElement.current.value;
        props.dispatch(cangePhoneInOrderPromoActionCreator(phone));
    }

    // debugger;
    return (
        <div className={st.Block1}>
            <div className={st.BadePhoto} >
                <img className={st.Promo} src={promo}></img>
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
                        <label className={st.p4}>Ваше имя:</label><br/>
                        <input ref={ nameElement } onChange={onNameChange} className={st.input} value={props.data.nameDefault} />
                    </div>
                    <div className={st.Input_block}>
                        <label className={st.p4}>Ваш телефон:</label><br/>
                        <input ref={ phoneElement } onChange={onPhoneChange} className={st.input} value={props.data.phoneDefault} />
                    </div>
                    <div className={st.button}>
                        <a href='#' onClick={ addOrder } >ПОЛУЧТЬ ПОДАРОК</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Block1;