import {useCustomFetch} from "~/composable/useCustomFetch";

export interface News {
    id: number,
    title: string,
    html: string,
    image: string,
}

interface ResultRequestNewsList {
    data: News[]
}
interface ResultRequestNews {
    data: News
}



export const getNewsList = async (): Promise<News[]> => {
    const { data }: {data: Ref<ResultRequestNewsList>} = await useCustomFetch('/news');

    if(unref(data)?.data) {
        return unref(data).data;
    }

    return [];
}
export const getNews = async (id: string | string[]): Promise<News | object> => {
    const { data }: {data: Ref<ResultRequestNews>} = await useCustomFetch(() => `/news/${id}`);

    if(unref(data)?.data) {
        return data.value.data;
    }

    return {};
}
