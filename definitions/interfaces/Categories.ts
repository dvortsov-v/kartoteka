import {Breadcrumbs} from "~/definitions/interfaces/Breadcrumbs";

export interface opitionFiltersOfCategory {
    created_at: string,
    filter_id: number,
    id: number,
    updated_at: string,
    value: string,
}
export interface filtersOfCategory {
    id: number,
    name: string,
    options: opitionFiltersOfCategory[],
    slug: string,
    type: string,
}

export interface Category {
    id: number,
    name: string,
    count: number,
    filters: filtersOfCategory[]
    sub_categories?: Category[],
}

export interface ResultRequesCategories {
    data: Category[]
}
export interface ResultRequestCategory {
    data: Category
}
export interface ResultRequestCategoryBreacrumbs {
    data: Breadcrumbs
}
