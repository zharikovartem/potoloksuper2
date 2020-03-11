import React from 'react';
import st from './Header.module.css';
import Button from '../Button/Button.js';
import logo from './logo22.jpg';
import HamburgerButton from './HamburgerButton/HamburgerButton';

const Header = () => {
    return (
        <div className={st.Header}>
            <div className={st.Icon1}>
                <img src={logo}></img>
            </div>
            <div className={st.Office}>
                <div className={st.Office_span}>
                    сурганова 18<br />
                    Пн-Сб 08:00 - 21:00
                </div>
            </div>
            <div className={st.Contacts}>
                {/* <span>+375(44)738325<br/>+375(44)738325</span><br/> */}
                <span className={st.Phone}>+375(44)738-31-25</span><br /><br />
                {/* <button>ЗАКАЗАТЬ ЗВОНОК</button> */}
                <Button name="ЗАКАЗАТЬ ЗВОНОК" />
            </div>
            <div className={st.HamburgerButton}>
                <HamburgerButton />
            </div>
        </div>
    );
}

export default Header;