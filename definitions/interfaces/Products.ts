import {Meta} from "~/definitions/interfaces/Meta";

interface Field {
    name: string,
    text?: string,
    link?: {
        text: string,
        href: string,
    }
}
interface AboutProduct {
    id: number;
    title: string;
    fields: Field[],
    fullFields?: Field[],
}
export interface Product {
    id: number,
    name: string,
    category: string,
    description: string,
    price: string,
    image: string,
    address: string,
    about: AboutProduct,
}
export interface ResultRequesProducts {
    data: Product[],
    meta: Meta,
}
export interface ResultRequestProduct {
    data: Product
}
