import {ResultRequestNews, ResultRequestNewsList, News} from "~/definitions/interfaces/News";
import {LocationQueryValue} from "vue-router";

export const getNewsListRequest = async (query: {page?: LocationQueryValue | LocationQueryValue[]}): Promise<ResultRequestNewsList> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestNewsList>} = await useFetch(`${config.public.baseURL}/news`, {
        query,
    });

    if(unref(data)) {
        return unref(data);
    }

    return {};
}
export const getNewsListFilterRequest = async (numberTitle: number): Promise<News[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestNewsList>} = await useFetch(`${config.public.baseURL}/news`, {
        query: {
            title: numberTitle,
        }
    });

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}
export const getNewsRequest = async (id: string | string[]): Promise<News | object> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestNews>} = await useFetch(`${config.public.baseURL}/news/${id}`);

    if(unref(data)?.data) {
        return data.value.data;
    }

    return {};
}
