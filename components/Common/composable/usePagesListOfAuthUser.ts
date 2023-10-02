import {useFavoritesStore} from "~/store/useFavoritesStore";

export const usePagesListOfAuthUser = () => {
    const favoritesStore = useFavoritesStore();


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
                count: 0,
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
                count: favoritesStore.favorites.length,
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
