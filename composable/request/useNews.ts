import {getNewsRelatedRequest, getNewsRequest} from "~/api/NewsApi";
import {News} from "~/definitions/interfaces/News";

export const useNews = () => {
    const route = useRoute();
    const news = ref<News | undefined>();
    const filteredNews = ref<News[]>([])


    const getNews = async (id: string| string[]) => {
        const result = await getNewsRequest(id);

        if(result) {
            news.value = result

            return result;
        } else {
            showError(createError({
                statusCode: 404,
                message: `Страницы не существует`,
                fatal: true,
            }))
        }
    }

    const getNewsRelated = async () => {
        filteredNews.value = await getNewsRelatedRequest(route.params.id);
    }
    const parsedFilteredNews = computed(() => unref(filteredNews).slice(0, 5));

    watch(() => route.params.id, () => {
        if(route.params.id) {
            getNews(route.params.id);
            getNewsRelated();
        }
    }, {immediate: true})

    return {
        news,
        parsedFilteredNews,
        getNews,
        getNewsRelated,
    }
}
