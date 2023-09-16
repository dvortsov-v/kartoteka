export interface Product {
    id: number,
    name: string,
    category: string,
    description: string,
    price: string,
    image: string,
    address: string,
    about: {
        'Заголовок 1': {
            подзаголовок1: string,
            подзаголовок2: string,
            подзаголовок3: string,
            подзаголовок4: string,
            подзаголовок5: string,
        },
        'Заголовок 2': {
            подзаголовок1: string,
            подзаголовок2: string,
            подзаголовок3: string,
            подзаголовок4: string,
            подзаголовок5: string,
        },
        'Заголовок 3': {
            подзаголовок1: string,
            подзаголовок2: string,
            подзаголовок3: string,
            подзаголовок4: string,
            подзаголовок5: string,
        }
    }
}
export interface ResultRequesProducts {
    data: Product[]
}
export interface ResultRequestProduct {
    data: Product
}
