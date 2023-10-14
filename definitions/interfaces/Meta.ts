interface MetaLink {
    active: boolean,
    label: string,
    url: string,
}
export interface Meta {
    current_page: number,
    from: number,
    last_page: number,
    links: MetaLink[],
    path: string,
    per_page: number,
    to: number,
    total: number,
}
