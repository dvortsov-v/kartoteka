import {useCustomFetch} from "~/composable/useCustomFetch";

export const getProducts = async () => {
    const { data } = await useCustomFetch(() => '/products');

    if(unref(data) && unref(data)?.data) {
        return unref(data)?.data;
    }

    return [];
}
export const getProduct = async (id: number) => {
    const { data } = await useCustomFetch(() => `/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
