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

let Block2 = () => {
    let data = [
        {name: 'Одноуровневый', to: '/simple', rowNumber: '0'},
        {name: 'Двухуровневый', to: '/double', rowNumber: '0'},
        {name: 'Глянцевый', to: '/gloss', rowNumber: '1'},
        {name: 'Матовый', to: '/matt', rowNumber: '1'},
        {name: 'Сатин', to: '/satin', rowNumber: '1'},
        {name: 'Тканевый', to: '/cloth', rowNumber: '1'}
    ]

    // формируем массив по map
    let results = data.map(item => <UrlItem name={item.name} to={item.to} /> );

    return (
        <div className={st.Block2}>
                <p className={st.header}>
                    ВЫБЕРИТЕ ОПТИМАЛЬНЫЙ  ТИП ПОТОЛКА
                </p>
                <div className={st.types0}>
                    <UrlItem name={ data[0].name } to={ data[0].to } />
                    <UrlItem name={ data[1].name } to={ data[1].to } />

                </div>
                <Route path='/simple' component={Simple}></Route>

                {/* передаем props */}
                <Route path='/double' render={ () => <Double/> } />

                <div className={ st.types1 }>
                    <UrlItem name={ data[2].name } to={ data[2].to } />
                    <UrlItem name={ data[3].name } to={ data[3].to } />
                    <UrlItem name={ data[4].name } to={ data[4].to } />
                    <UrlItem name={ data[5].name } to={ data[5].to } />
                    {/* { results } */}
                </div>
        </div>
    )
}

export default Block2;