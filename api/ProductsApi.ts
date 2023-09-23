import {Product, ResultRequesProducts, ResultRequestProduct} from "~/definitions/interfaces/Products";

export const getProductsRequest = async (queryParams?: { name?: string, category_ids?: string|string[], address?: string }): Promise<Product[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products`,{
        query: queryParams,
    });

    if(unref(data)?.data) {
        return unref(data)?.data;
    }

    return [];
}
export const getProductRequest = async (id: string | string[]): Promise<Product | object> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestProduct>} = await useFetch(`${config.public.baseURL}/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}

