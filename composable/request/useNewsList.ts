import {getNewsListRequest} from "~/api/NewsApi";
import {LocationQueryValue} from "vue-router";
import {News, ResultRequestNewsList} from "~/definitions/interfaces/News";
import {Meta} from "~/definitions/interfaces/Meta";

export const useNewsList = () => {
    const route = useRoute();
    const newsList = ref<News[]>([]);
    const paginationDate = ref<Meta>();

    const getNewsList = async (params?: {page?: LocationQueryValue | LocationQueryValue[]}) => {
        const {data, meta}: ResultRequestNewsList | never = await getNewsListRequest({page: route?.query?.page, ...params});
        newsList.value = data;
        paginationDate.value = meta
    }

    watch(() => route.query.page, () => {
        if(route.query.page) {
            getNewsList();
        }
    }, {immediate: true})

    return {
        newsList,
        paginationDate,
        getNewsList,
    }
}
