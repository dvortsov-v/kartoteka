export interface News {
    id: number,
    title: string,
    html: string,
    image: string,
}

export interface ResultRequestNewsList {
    data: News[]
}
export interface ResultRequestNews {
    data: News
}
