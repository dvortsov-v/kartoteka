import {useProducts} from "~/composable/request/useProducts";
import {ParamsProduct} from "~/api/ProductsApi";

export default defineNuxtRouteMiddleware(async (from) => {
    const paramsProduct: ParamsProduct = {
        order_type: 'DESC',
        order_by: 'price',
    };
    if(from?.query?.page) {
        paramsProduct.page = from?.query?.page;
    }
    if(from.params.id) {
        paramsProduct.category_ids = from.params.id
    }

    const {
        getProducts,
    } = useProducts();
    const res = await getProducts(paramsProduct);

    if (!res || !res.length) {
        throw createError({
            statusCode: 404,
            message: `Страницы не существует`,
        });
    }
})
