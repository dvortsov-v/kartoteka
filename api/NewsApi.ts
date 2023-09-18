import {useCustomFetch} from "~/composable/useCustomFetch";
import {ResultRequestNews, ResultRequestNewsList, News} from "~/definitions/interfaces/News";

export const getNewsListRequest = async (): Promise<News[]> => {
    const { data }: {data: Ref<ResultRequestNewsList>} = await useCustomFetch('/news');

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}
export const getNewsRequest = async (id: string | string[]): Promise<News | object> => {
    const { data }: {data: Ref<ResultRequestNews>} = await useCustomFetch(() => `/news/${id}`);

    if(unref(data)?.data) {
        return data.value.data;
    }

    return {};
}
