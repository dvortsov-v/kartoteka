export interface Breadcrumbs {
    id: number,
    name: string,
    parent_category?: {
        id: number,
        name: string,
        parent_category?: Breadcrumbs,
        count: number,
    },
    count: number,
}
