import {ResultRequestNews, ResultRequestNewsList, News} from "~/definitions/interfaces/News";

export const getNewsListRequest = async (): Promise<News[]> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<ResultRequestNewsList>} = await useFetch(`${config.public.baseURL}/news`);

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
