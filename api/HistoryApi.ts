import {ResultRequestHistory, ResultRequestHistoryList, History} from "~/definitions/interfaces/History";
import {LocationQueryValue} from "vue-router";

export const getHistoryListRequest = async (query: {page?: LocationQueryValue | LocationQueryValue[]}): Promise<ResultRequestHistoryList> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestHistoryList>} = await useFetch(`${config.public.baseURL}/history`, {
        query,
    });

    if(unref(data)) {
        return unref(data);
    }

    return {};
}
export const getHistoryListFilterRequest = async (numberTitle: number): Promise<History[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestHistoryList>} = await useFetch(`${config.public.baseURL}/history`, {
        query: {
            title: numberTitle,
        }
    });

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}
export const getHistoryRelatedRequest = async (id: string | string[]): Promise<History[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestHistoryList>} = await useFetch(`${config.public.baseURL}/history/${id}/related`);

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}
export const getHistoryRequest = async (id: string | string[]): Promise<History | object> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestHistory>} = await useFetch(`${config.public.baseURL}/history/${id}`);

    if(unref(data)?.data) {
        return data.value.data;
    }

    return {};
}
