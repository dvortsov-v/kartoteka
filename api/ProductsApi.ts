import {Product, ResultRequesProducts, ResultRequestProduct} from "~/definitions/interfaces/Products";
import {LocationQueryValue} from "vue-router";
export interface ParamsProduct {
    name?: string,
    category_ids?: string|string[],
    address?: string,
    page?: LocationQueryValue | LocationQueryValue[],
    price_to?: number,
    price_from?: number,
    status?: string | string[],
    is_lot?: boolean,
    has_image?: boolean,
    bargaining_from?: string,
    bargaining_to?: string,
    order_by?: string,
    order_type?: string,
    regins_ids?: string|string[],
}

export const getProductsRequest = async (queryParams?: ParamsProduct): Promise<ResultRequesProducts | never> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products`,{
        query: queryParams,
    });

    if(unref(data)) {
        return unref(data);
    }

    return {};
}
export const getProductRequest = async (id: string | string[]): Promise<Product | never> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestProduct>} = await useFetch(`${config.public.baseURL}/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
export const getProductRelatedRequest = async (id: string | string[]): Promise<Product[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products/${id}/related`);

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}

