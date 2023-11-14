import {
    Product,
    ResultRequesProducts,
    ResultRequestProduct,
    ResultRequestProductCount
} from "~/definitions/interfaces/Products";
import {LocationQueryValue} from "vue-router";
export interface ParamsProduct {
    name?: string,
    category_ids?: string|string[],
    address?: string,
    page?: LocationQueryValue | LocationQueryValue[],
    price_to?: number | null,
    price_from?: number | null,
    status?: LocationQueryValue | LocationQueryValue[],
    is_lot?: boolean,
    has_image?: boolean,
    bargaining_from?: LocationQueryValue | LocationQueryValue[],
    bargaining_to?: LocationQueryValue | LocationQueryValue[],
    order_by?: string,
    order_type?: string,
    region_ids?: LocationQueryValue | LocationQueryValue[],
}

export const getProductsRequest = async (queryParams?: ParamsProduct): Promise<ResultRequesProducts | null> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products`,{
        query: queryParams,
    });

    if(unref(data)) {
        return unref(data);
    }

    return null;
}

export const getProductsCountRequest = async (queryParams?: ParamsProduct): Promise<number> => {
    const config = useRuntimeConfig()
    try {
        const { data }: {data: Ref<ResultRequestProductCount>} = await useFetch(`${config.public.baseURL}/products/count`,{
            query: queryParams,
        });

        return unref(data).count || 0;
    } catch (e) {
        return 0;
    }

}
export const getProductRequest = async (id: string | string[]): Promise<Product | null> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestProduct>} = await useFetch(`${config.public.baseURL}/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return null;
}
export const getProductRelatedRequest = async (id: string | string[]): Promise<Product[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products/${id}/related`);

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}

