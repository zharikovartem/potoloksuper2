import { rerenderEntireTree } from './../render';
// rerenderOrder
import { rerenderOrder } from './../render';



let data = {
    productTypes: [
        {
            name: 'Одноуровневый',
            to: '/simple',
            rowNumber: '0',
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
            ],
            exampleImage: './Prostoi1.jpg'
        },
        {
            name: 'Двухуровневый',
            to: '/double',
            rowNumber: '0',
            specifications: [
                '111',
                '222',
                '333',
                '444'
            ],
            advantages: [
                '111',
                '222',
                '333',
                '444'
            ],
            exampleImage: './Double1.jpg'
        },
        {
            name: 'Глянцевый',
            to: '/gloss',
            rowNumber: '1',
            specifications: [
                '111',
                '222',
                '333',
                '444'
            ],
            advantages: [
                '111',
                '222',
                '333',
                '444'
            ],
            exampleImage: '123'
        },
        {
            name: 'Матовый',
            to: '/matt',
            rowNumber: '1',
            specifications: [
                '111',
                '222',
                '333',
                '444'
            ],
            advantages: [
                '111',
                '222',
                '333',
                '444'
            ],
            exampleImage: '123'
        },
        {
            name: 'Сатин',
            to: '/satin',
            rowNumber: '1',
            specifications: [
                '111',
                '222',
                '333',
                '444'
            ],
            advantages: [
                '111',
                '222',
                '333',
                '444'
            ],
            exampleImage: '123'
        },
        {
            name: 'Тканевый',
            to: '/cloth',
            rowNumber: '1',
            specifications: [
                '111',
                '222',
                '333',
                '444'
            ],
            advantages: [
                '111',
                '222',
                '333',
                '444'
            ],
            exampleImage: '123'
        }
    ],
    orderPromo: {
        phoneDefault: 'Введите телефон', 
        nameDefault: 'Введите имя'
    }
};



export let addOrder = (orderData) => {
    let newOrder = {
        name: orderData.name,
        phone: orderData.phone
    };
    rerenderOrder(newOrder);
}

export let changeNameInOrderPromo = (name) => {
    data.orderPromo.nameDefault = name;
    rerenderEntireTree(data);
}

// 
export let changePhoneInOrderPromo = (phone) => {
    data.orderPromo.phoneDefault = phone;
    rerenderEntireTree(data);
}


export default data;