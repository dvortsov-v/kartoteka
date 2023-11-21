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

export const getOrderRequest = async (token: string | null | undefined, id: string| string[]): Promise<void> => {
    if(token) {
        const config = useRuntimeConfig()
        try {
            await useFetch(`${config.public.baseURL}/orders/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                }
            });
        } catch (e) {

        }
    }
}
