import {useCustomFetch} from "~/composable/useCustomFetch";

export const getNews = async () => {
    const { data } = await useCustomFetch(() => '/news');
    console.log(data.value);

    if(data?.value?.data) {
        return data.value.data;
    }

    return [];
}
