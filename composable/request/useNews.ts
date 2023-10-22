import {getNewsRelatedRequest, getNewsRequest} from "~/api/NewsApi";
import {News} from "~/definitions/interfaces/News";

export const useNews = () => {
    const route = useRoute();
    const news = ref<News | undefined>();
    const filteredNews = ref<News[]>([])


    const getNews = async () => {
        news.value = await getNewsRequest(route.params.id);
        console.log()
    }

    const getNewsRelated = async () => {
        filteredNews.value = await getNewsRelatedRequest(route.params.id);
    }
    const parsedFilteredNews = computed(() => unref(filteredNews).slice(0, 5));

    watch(() => route.params.id, () => {
        if(route.params.id) {
            getNews();
            getNewsRelated();
        }
    }, {immediate: true})

    return {
        news,
        parsedFilteredNews,
    }
}
