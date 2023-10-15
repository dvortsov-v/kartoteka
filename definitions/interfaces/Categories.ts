export interface Category {
    id: number,
    name: string,
    count: number,
    sub_categories?: Category[],
}
export interface CategoryBreacrumbs {
    id: number,
    name: string,
    parent_category?: {
        id: number,
        name: string,
        parent_category?: CategoryBreacrumbs,
        count: number,
    },
    "count": number,
}
export interface ResultRequesCategories {
    data: Category[]
}
export interface ResultRequestCategory {
    data: Category
}
export interface ResultRequestCategoryBreacrumbs {
    data: CategoryBreacrumbs
}
