import {useProduct} from "~/composable/request/useProduct";

export default defineNuxtRouteMiddleware(async () => {
    const {
        getProduct,
    } = useProduct();

    const res = await getProduct();

    if (!res) {
        throw createError({
            statusCode: 404,
            message: `Страницы не существует`,
        });
    }
})
