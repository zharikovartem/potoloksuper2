import React from 'react';
import st from'./LayerItem.module.css';
import logo1 from './../box1.1.png';
import logo2 from './../box2.2.png';
import logo3 from './../box3.3.png';
import logo4 from './../box4.4.png';
import logo5 from './../box5.1.png';
import logo6 from './../box6.1.png';
import logo7 from './../box7.1.png';
import logo8 from './../box8.1.png';

let imgs = {};
imgs[1] = logo1;
imgs[2] = logo2;
imgs[3] = logo3;
imgs[4] = logo4;
imgs[5] = logo5;
imgs[6] = logo6;
imgs[7] = logo7;
imgs[8] = logo8;

const LayerItem = (props) => {
    return(
        <div className={st.LayerItem}>
            <img src={imgs[props.img]}></img>
            <span>{props.value}</span>
        </div>
    );
}

export default LayerItem;