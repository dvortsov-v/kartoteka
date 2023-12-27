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

export const getProductsInMapRequest = async (bound: string): Promise<ResultRequesProducts | null> => {
    const config = useRuntimeConfig()
    console.log(bound)
    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/map/get`,{
        query: {
            bbox: `bbox=${bound}`
        },
    });
    // console.log(data.value)

    if(unref(data)) {
        return unref(data);
    }

    return null;
}
export const getProductRequest = async (id: string | string[]): Promise<Product | null> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestProduct>} = await useFetch(`${config.public.baseURL}/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return null;
}
