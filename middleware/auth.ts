export default defineNuxtRouteMiddleware(() => {
    const userToken = useCookie('userToken');

    if(!unref(userToken)) {
        throw createError({
            statusCode: 400,
            message: "Страницы не существует",
        });
    }
})
