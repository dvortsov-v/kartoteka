import {useNews} from "~/composable/request/useNews";

export default defineNuxtRouteMiddleware(async (from) => {
    const {getNews} = useNews();
    console.log(123)
    const res = await getNews(from.params.id);

    if (!res) {
        throw createError({
            statusCode: 404,
            message: `Страницы не существует`,
        });
    }
})
