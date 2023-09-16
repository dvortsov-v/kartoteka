export interface Category {
    id: number,
    name: string,
    count: number,
    sub_categories?: Category[],
}
export interface ResultRequesCategories {
    data: Category[]
}
export interface ResultRequestCategory {
    data: Category
}
