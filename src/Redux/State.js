const ADD_ORDER = 'ADD-ORDER'
const CHANGE_NAME_IN_ORDER_PROMO = 'CHANGE-NAME-IN-ORDER-PROMO';
const CHANGE_PHONE_IN_ORDER_PROMO = 'CHANGE-PHONE-IN-ORDER-PROMO';

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
    setState(newState) {
        this._state = newState;
    },
    rerenderEntireTree() {} ,
    subscribeTree(observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderOrder() {},
    subscribeOrder(observer) {
        this.rerenderOrder = observer;
    },
    dispatch (action) {
        if (action.type === ADD_ORDER) {
            this.rerenderOrder(this._state);
        } else if (action.type === CHANGE_NAME_IN_ORDER_PROMO) {
            this._state.orderPromo.nameDefault = action.name;
            this.rerenderEntireTree(this.store);
        } else if (action.type === CHANGE_PHONE_IN_ORDER_PROMO) {
            this._state.orderPromo.phoneDefault = action.phone;
            this.rerenderEntireTree(this.store);
        }
    }
}

export const addOrderActionCreator = () => {
    return {type: ADD_ORDER}
}
export const cangeNameInOrderPromoActionCreator = (name) => {
    return {type: CHANGE_NAME_IN_ORDER_PROMO, name: name}
}
export const cangePhoneInOrderPromoActionCreator = (phone) => {
    return {type: CHANGE_PHONE_IN_ORDER_PROMO, phone: phone}
}

export default store;
window.store = store;