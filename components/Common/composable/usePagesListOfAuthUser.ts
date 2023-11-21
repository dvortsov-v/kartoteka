import {storeToRefs} from "pinia";
import {useUserStore} from "~/store/useUserStore";
import {useFavoritesStore} from "~/store/useFavoritesStore";
import {ComputedRef} from "vue";

interface OfficePage {
    id: number;
    name: string;
    icon: string;
    path: string;
    count?: number,
}

export const usePagesListOfAuthUser = (): ComputedRef<OfficePage[]> => {
    const {countFavorites} = storeToRefs(useFavoritesStore())
    const {countOrders} = storeToRefs(useUserStore())

    return computed(() => {
        return [
            {
                id: 0,
                name: 'Статистика',
                icon: 'statistic',
                path: '/office/statistic',
            },
            {
                id: 1,
                name: 'Заявки',
                icon: 'statistic/task-3',
                path: '/office/orders',
                count: unref(countOrders),
            },
            {
                id: 2,
                name: 'Предложения',
                icon: 'folderlist',
                path: '/office/offer',
                count: 0,
            },
            {
                id: 3,
                name: 'Избранное',
                icon: 'star-line',
                path: '/office/favorites',
                count: unref(countFavorites),
            },
            {
                id: 4,
                name: 'Профиль',
                icon: 'user',
                path: '/office/profile',
            },
            {
                id: 5,
                name: 'Поддержка',
                icon: 'mail',
                path: '/office/support',
            }]
    })
}
