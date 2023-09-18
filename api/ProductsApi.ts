import {useCustomFetch} from "~/composable/useCustomFetch";
import {Product, ResultRequesProducts, ResultRequestProduct} from "~/definitions/interfaces/Products";

export const getProductsRequest = async (): Promise<Product[]> => {
    const { data }: {data: Ref<ResultRequesProducts>} = await useCustomFetch(() => '/products');

    if(unref(data)?.data) {
        return unref(data)?.data;
    }

    return [];
}
export const getProductRequest = async (id: number): Promise<Product | object> => {
    const { data }: {data: Ref<ResultRequestProduct>} = await useCustomFetch(() => `/products/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}

