let store = {
    _state: {
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
                    'Двухуровневые потолки позволяют провести зонирование помещения, скрыть нероности и существенно сэкономит пространство.',
                    'Полотно является высокопрочным, может выдерживать до 100 литров воды на 1 кв. м.',
                    'Двухуровневые натяжные потолки обладают большой влагоустойчивостью и не собирают конденсат. Это позволит защитить помещение от затопления сверху.',
                    'Все материалы являются экологически чистыми и не выделяют токсичных веществ.'
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
    },
    getState() {
        return this._state;
    },
    setState() {

    },
    rerenderEntireTree() { console.log('123');} ,
    rerenderOrder() {},
    addOrder(orderData) {
        this.rerenderOrder(orderData);
    },
    changeNameInOrderPromo(name) {
        this._state.orderPromo.nameDefault = name;
        this.rerenderEntireTree(this.store);
    },
    changePhoneInOrderPromo(phone) {
        this._state.orderPromo.phoneDefault = phone;
        this.rerenderEntireTree(this.store);
    },
    subscribeTree(observer) {
        this.rerenderEntireTree = observer;
    },
    subscribeOrder(observer) {
        this.rerenderOrder = observer;
    }
}

// let rerenderEntireTree = () => {}
// let rerenderOrder = () => {}


// export const addOrder = (orderData) => {
//     let newOrder = {
//         name: orderData.name,
//         phone: orderData.phone
//     };
//     rerenderOrder(newOrder);
// }

// export const changeNameInOrderPromo = (name) => {
//     data.orderPromo.nameDefault = name;
//     rerenderEntireTree(data);
// }

// export const changePhoneInOrderPromo = (phone) => {
//     data.orderPromo.phoneDefault = phone;
//     rerenderEntireTree(data);
// }

// export const subscribeTree = (observer) => {
//         rerenderEntireTree = observer;
// }
// export const subscribeOrder = (observer) => {
//     rerenderOrder = observer;
// }


// export default data;
export default store;
window.store = store;