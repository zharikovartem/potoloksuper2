import React from 'react';
import st from'./Layer2.module.css';
import LayerItem from './LayerItem/LayerItem';

const Layer2 = (props) => {
    // import logo from 
    return(
        <div className={st.Layer}>
            <div className={st.Layer2}>
                <LayerItem img="1" value="Установка любого освещения"/>
                <LayerItem img="2" value="Герметичность пленки"/>
                <LayerItem img="3" value="Скрытые карнизы"/>
                <LayerItem img="4" value="Установка любого освещения"/>
                <LayerItem img="5" value="Установка любого освещения"/>
                <LayerItem img="6" value="Установка любого освещения"/>
                <LayerItem img="7" value="Установка любого освещения"/>
                <LayerItem img="8" value="Установка любого освещения"/>
            </div>
        </div>
    );
}

export default Layer2;