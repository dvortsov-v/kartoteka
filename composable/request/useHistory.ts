import {getHistoryListRequest} from "~/api/HistoryApi";
import {LocationQueryValue} from "vue-router";
import {History, ResultRequestHistoryList} from "~/definitions/interfaces/History";
import {Meta} from "~/definitions/interfaces/Meta";

export const useHistoryList = () => {
    const route = useRoute();
    const historyList = ref<History[]>([]);
    const paginationDate = ref<Meta>();

    const getHistoryList = async (params?: {page?: LocationQueryValue | LocationQueryValue[]}) => {
        const {data, meta}: ResultRequestHistoryList | never = await getHistoryListRequest({page: route?.query?.page, ...params});
        historyList.value = data;
        paginationDate.value = meta
    }

    watch(() => route.query.page, () => {
        if(route.query.page) {
            getHistoryList();
        }
    }, {immediate: true})

    return {
        historyList,
        paginationDate,
        getHistoryList,
    }
}
