import {useCustomFetch} from "~/composable/useCustomFetch";

export const getNewsList = async () => {
    const { data } = await useCustomFetch(() => '/news');

    if(unref(data) && unref(data)?.data) {
        return unref(data)?.data;
    }

    return [];
}
export const getNews = async (id: number) => {
    const { data } = await useCustomFetch(() => `/news/${id}`);

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
