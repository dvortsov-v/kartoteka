import {Product, ResultRequesProducts, ResultRequestProduct} from "~/definitions/interfaces/Products";
import {LocationQueryValue} from "vue-router";
interface QueryParams {
    name?: string,
    category_ids?: string|string[],
    address?: string,
    page?: LocationQueryValue | LocationQueryValue[]
}

export const getProductsRequest = async (queryParams?: QueryParams): Promise<ResultRequesProducts | never> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products`,{
        query: queryParams,
    });
    console.log(unref(data));

    if(unref(data)) {
        return unref(data);
    }

    return {};
}
export const getProductRequest = async (id: string | string[]): Promise<Product | object> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestProduct>} = await useFetch(`${config.public.baseURL}/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}

