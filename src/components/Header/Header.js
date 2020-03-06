import React from 'react';
import st from './Header.module.css';
import Button from '../Button/Button.js';
import logo from './logo22.jpg';

const Header = () => {
    return(
        <div className={st.Header}>
            <div className={st.Icon1}>
                <img src={logo}></img>
                {/* <img src="" /> */}
            </div>
            <div className={st.Office}>
                <div className={st.Office_span}>
                    сурганова 18<br/>
                    Пн-Сб 08:00 - 21:00
                </div>
            </div>
            <div>
                {/* <span>+375(44)738325<br/>+375(44)738325</span><br/> */}
                <span className={st.Phone}>+375(44)738-31-25</span><br/><br/>
                {/* <button>ЗАКАЗАТЬ ЗВОНОК</button> */}
                <Button name="ЗАКАЗАТЬ ЗВОНОК" />
            </div>
        </div>
    );
}

export default Header;