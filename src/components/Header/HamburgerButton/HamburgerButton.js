import React from 'react';
import st from './HamburgerButton.module.css';
import icon from './HamburgerButton.png'

const HamburgerButton = () => {
  return (
    <div className="hamburger-menu">
      <img src={icon} className={st.icon}></img>
    </div>
  );
}

export default HamburgerButton;