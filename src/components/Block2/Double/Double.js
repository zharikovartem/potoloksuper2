import React from 'react';
import st from'./Double.module.css';

const Double = () => {
    return (
        <div className={st.Double}>
            <div className={st.Text1}>
                <p className={st.p1}>ХАРАКТЕРИСТИКИ:</p>
                <li>Двухуровневые потолки позволяют провести зонирование помещения, скрыть нероности и существенно сэкономит пространство.</li>
                <li>Полотно является высокопрочным, может выдерживать до 100 литров воды на 1 кв. м.</li>
                <li>Двухуровневые натяжные потолки обладают большой влагоустойчивостью и не собирают конденсат. Это позволит защитить помещение от затопления сверху.</li>
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

export default Double;