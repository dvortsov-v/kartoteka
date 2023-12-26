import {Meta} from "~/definitions/interfaces/Meta";
import {Breadcrumbs} from "~/definitions/interfaces/Breadcrumbs";

interface Field {
    name: string,
    text?: string,
    link?: {
        text: string,
        href: string,
    }
}
export interface AboutProduct {
    id: number;
    title: string;
    fields: Field[],
    fullFields?: Field[],
}
interface ProductSeller {
    name: string,
    email: string,
    phone: string,
    socials: {
        facebook: string,
        telegram: string,
        vkontakte: string,
    },
    created_at: string,
}

export interface Product {
    id: number,
    name: string,
    category: Breadcrumbs,
    categoryId: number,
    description: string,
    price: string,
    images: string,
    address: string,
    about: AboutProduct[],
    status: string,
    lat: string,
    lng: string,
    seller: ProductSeller,
    created_at: string,
    region: string,
    is_lot: boolean,
    bargaining_from: string,
    bargaining_to: string,
    is_favorite?: boolean,
    show_count: number,
    favorites_count:  number,
    orders_count:  number,
    is_top?: boolean,
}
export interface ResultRequesProducts {
    data: Product[],
    meta: Meta,
}
export interface ResultRequestProduct {
    data: Product
}
export interface ResultRequestProductCount {
    count: number;
}
