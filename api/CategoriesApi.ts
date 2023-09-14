import {useCustomFetch} from "~/composable/useCustomFetch";

export const getCategories = async () => {
    const { data } = await useCustomFetch(() => '/categories');

    if(unref(data) && unref(data)?.data) {
        return unref(data)?.data;
    }

    return [];
}
export const getCategory = async (id: number) => {
    const { data } = await useCustomFetch(() => `/categories/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
