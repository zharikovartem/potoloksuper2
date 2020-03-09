import React from 'react';
import st from'./Block2.module.css';
import { NavLink, Route } from 'react-router-dom';
import Simple from './Simple/Simple';
import Double from './Double/Double';

const UrlItem = (props) => {
    return (
        <div className={st.TypeItem}>
            <NavLink to={props.to} activeClassName={st.active}>{props.name}</NavLink>
        </div>
    );
}

const Block2 = () => {
    let data = [
        {name: 'Одноуровневый', to: '/simple'},
        {name: 'Двухуровневый', to: '/double'}
    ]

    return (
        <div className={st.Block2}>
                {/* {`${st.item} ${st.active}`}  - Засунуть 2 класса */}
                <p className={st.header}>
                    ВЫБЕРИТЕ ОПТИМАЛЬНЫЙ  ТИП ПОТОЛКА
                </p>
                <div className={st.types}>
                    <UrlItem name={data[0].name} to={data[0].to} />
                    <UrlItem name={data[1].name} to={data[1].to} />

                </div>
                <Route path='/simple' component={Simple}></Route>
                <Route path='/double' component={Double}></Route>
                <div className={st.types2}>
                    <UrlItem name='Глянцевый' to='/gloss' />
                    <UrlItem name='Матовый' to='/matt' />
                    <UrlItem name='Сатин' to='/satin' />
                    <UrlItem name='Тканевый' to='/cloth' />
                </div>
        </div>
    )
}

export default Block2;