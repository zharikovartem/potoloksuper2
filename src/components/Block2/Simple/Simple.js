import React from 'react';
import st from'./Simple.module.css';

const Simple = () => {
    return (
        <div className={st.Simple}>
            <div className={st.Text1}>
                <p className={st.p1}>ХАРАКТЕРИСТИКИ:</p>
                <li>Одноуровневый натяжной потолок будет идеальным решением для небольших помещений с невысокими потолками. Такой потолок забирает не более 4 см высоты, что незначительно сократить высоту стен.</li>
                <li>Полотно является высокопрочным, может выдерживать до 100 литров воды на 1 кв. м.</li>
                <li>Натяжные одноуровневые потолки обладают большой влагоустойчивостью и не собирают конденсат. Это позволит защитить помещение от затопления сверху.</li>
                <li>Все материалы являются экологически чистыми и не выделяют токсичных веществ.</li>
            </div>
            <div className={st.Image}></div>
            <div className={st.Text2}>
                <p className={st.p1}>ПРЕИМУЩЕСТВА:</p>
                <li>На установку одноуровневых натяжных потолков требуется гораздо меньше времени, чем на другие виды.</li>
                <li>Усилий для установки натяжных потолков соответственно тоже тратится меньше.</li>
                <li>В связи с этим и стоимость на одноуровневые потолки их установку гораздо дешевле.</li>
                <li>Натяжные потолки создают идеально ровную поверхность и помогают скрыть все неровности основного потолка, а также различные коммуникации жизнедеятельности человека и электропроводку.</li>
            </div>
        </div>
    )
}
// http://etopotolok.com/vidy-potolkov/natyazhnye/preimushhestva-odnourovnevyx-natyazhnyx-potolkov.html#d1
export default Simple;