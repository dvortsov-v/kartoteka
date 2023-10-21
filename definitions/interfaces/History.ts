import {Meta} from "~/definitions/interfaces/Meta";

export interface History {
    id: number,
    title: string,
    html: string,
    images: string[],
}

export interface ResultRequestHistoryList {
    data: History[],
    meta: Meta,
}
export interface ResultRequestHistory {
    data: History
}