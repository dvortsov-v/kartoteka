import {Meta} from "~/definitions/interfaces/Meta";

export interface News {
    id: number,
    title: string,
    html: string,
    image: string,
}

export interface ResultRequestNewsList {
    data: News[],
    meta: Meta,
}
export interface ResultRequestNews {
    data: News
}
