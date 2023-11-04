export default defineNuxtRouteMiddleware(() => {
    const userToken = useCookie('userToken');
    if(process.client && !unref(userToken)) {
        throw createError({
            statusCode: 404,
            message: "Страницы не существует",
        });
    }
})
