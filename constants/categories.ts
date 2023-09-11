
export interface Category {
    id: number,
    name: string,
    count: number,
    subcategories?: Category[],
}
export const categories: Category[] = [
    {
        id: 0,
        name: 'Недвижимость',
        count: 1000,
        subcategories: [
            {
                id: 0,
                name: 'Легковой',
                count: 1000,
            },
            {
                id: 1,
                name: 'Грузовой',
                count: 1000,
            },
            {
                id: 2,
                name: 'Общественный',
                count: 1000,
            },
            {
                id: 3,
                name: 'Спецтехника',
                count: 1000,
            },
            {
                id: 4,
                name: 'Сельскохозяйственный',
                count: 1000,
            },
            {
                id: 5,
                name: 'Водный',
                count: 1000,
            },
            {
                id: 6,
                name: 'Воздушный',
                count: 1000,
            },
            {
                id: 7,
                name: 'Железнодорожный',
                count: 1000,
            },
            {
                id: 8,
                name: 'Мото',
                count: 1000,
            },
            {
                id: 9,
                name: 'Прицепы',
                count: 1000,
            },
            {
                id: 10,
                name: 'Прочее',
                count: 1000,
            },
        ]
    },
    {
        id: 1,
        name: 'Оборудование',
        count: 1000,
    },
    {
        id: 2,
        name: 'Имущественные права',
        count: 1000,
    },
    {
        id: 3,
        name: 'Транспорт',
        count: 1000,
    },
    {
        id: 4,
        name: 'Бытовая электроника',
        count: 1000,
    },
    {
        id: 5,
        name: 'Спецтехника',
        count: 1000,
    },
    {
        id: 6,
        name: 'Промышленность',
        count: 1000,
    },
    {
        id: 7,
        name: 'Финансовые активы',
        count: 1000,
    },
    {
        id: 8,
        name: 'Прочее',
        count: 1000,
    },
]
