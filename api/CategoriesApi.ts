import {ResultRequesCategories, ResultRequestCategory, Category} from "~/definitions/interfaces/Categories";

export const getCategoriesRequest = async (): Promise<Category[]> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequesCategories>} = await useFetch(`${config.public.baseURL}/categories`);

    if(unref(data).data) {
        return unref(data).data;
    }

    return [];
}
export const getCategoryRequest = async (id: string| string[]): Promise<Category | never> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequestCategory>} = await useFetch(`${config.public.baseURL}/categories/${id}`);

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return {};
}
