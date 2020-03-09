import React from 'react';
import st from'./Block2.module.css';
import prostoi from './Prostoi1.jpg';

const Block2 = () => {
    return (
        <div className={st.Block2}>
                {/* {`${st.item} ${st.active}`}  - Засунуть 2 класса */}
                <p className={st.header}>
                    ВЫБЕРИТЕ ТИП ПОТОЛКА
                </p>
                <div className={st.types}>
                    <div className={st.TypeItem}>
                        <a href="">Простой</a>
                        {/* <img className={st.Img} src={prostoi}></img> */}
                    </div>
                    <div className={st.TypeItem}><a href="">Двухуровневый</a></div>
                    {/* <div className={st.TypeItem}><a href="">Парящий</a></div>
                    <div className={st.TypeItem}><a href="">Тканевый</a></div> */}
                </div>
        </div>
    )
}

export default Block2;