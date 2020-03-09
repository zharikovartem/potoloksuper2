import React from 'react';
import st from'./Block2.module.css';
import { NavLink, Route } from 'react-router-dom';
import Simple from './Simple/Simple';
import Double from './Double/Double';

const Block2 = () => {
    return (
        <div className={st.Block2}>
                {/* {`${st.item} ${st.active}`}  - Засунуть 2 класса */}
                <p className={st.header}>
                    ВЫБЕРИТЕ ОПТИМАЛЬНЫЙ  ТИП ПОТОЛКА
                </p>
                <div className={st.types}>
                    <div className={st.TypeItem}>
                        <NavLink to='/simple'>Одноуровневый</NavLink>
                        {/* <img className={st.Img} src={prostoi}></img> */}
                    </div>
                    <div className={st.TypeItem}>
                        <NavLink to='/double'>Двухуровневый</NavLink>
                        </div>
                    {/* <div className={st.TypeItem}><a href="">Парящий</a></div>*/}
                    {/*<div className={st.TypeItem}><a href="">Тканевый</a></div> */}
                    <div >Описания простого натяжного потолка</div>
                    <div >Описания Двухуровневого натяжного потолка</div>
                </div>
                <Route path='/simple' component={Simple}></Route>
                <Route path='/double' component={Double}></Route>
        </div>
    )
}

export default Block2;