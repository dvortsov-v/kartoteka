import {useCustomFetch} from "~/composable/useCustomFetch";
import {ResultRequesCategories, ResultRequestCategory, Category} from "~/definitions/interfaces/Categories";

export const getCategoriesRequest = async (): Promise<Category[]> => {
    const { data }: {data: Ref<ResultRequesCategories>} = await useCustomFetch(() => '/categories');

    if(unref(data)?.data) {
        return unref(data)?.data;
    }

    return [];
}
export const getCategoryRequest = async (id: number): Promise<Category | object> => {
    const { data }: {data: Ref<ResultRequestCategory>} = await useCustomFetch(() => `/categories/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
