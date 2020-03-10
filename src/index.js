import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
    {name: 'Одноуровневый', to: '/simple', rowNumber: '0', 
    specifications: [
        'Одноуровневый натяжной потолок будет идеальным решением для небольших помещений с невысокими потолками. Такой потолок забирает не более 4 см высоты, что незначительно сократить высоту стен.',
        'Полотно является высокопрочным, может выдерживать до 100 литров воды на 1 кв. м.',
        'Натяжные одноуровневые потолки обладают большой влагоустойчивостью и не собирают конденсат. Это позволит защитить помещение от затопления сверху.',
        'Все материалы являются экологически чистыми и не выделяют токсичных веществ.'
    ], 
    advantages: [
        'На установку одноуровневых натяжных потолков требуется гораздо меньше времени, чем на другие виды.',
        'Усилий для установки натяжных потолков соответственно тоже тратится меньше.',
        'В связи с этим и стоимость на одноуровневые потолки их установку гораздо дешевле.',
        'Натяжные потолки создают идеально ровную поверхность и помогают скрыть все неровности основного потолка, а также различные коммуникации жизнедеятельности человека и электропроводку.'
    ]
    },
    {name: 'Двухуровневый', to: '/double', rowNumber: '0'},
    {name: 'Глянцевый', to: '/gloss', rowNumber: '1'},
    {name: 'Матовый', to: '/matt', rowNumber: '1'},
    {name: 'Сатин', to: '/satin', rowNumber: '1'},
    {name: 'Тканевый', to: '/cloth', rowNumber: '1'}
]

ReactDOM.render(<App data={ data }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
