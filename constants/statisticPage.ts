import {StatisticCase, StatisticPoints} from "~/definitions/interfaces/Statistic";

export const statisticAdvertising: StatisticCase[] = [
    {
        id: 1,
        icon: 'post',
        number: '2,6',
        name: 'Глубина просмотра',
    },
    {
        id: 2,
        icon: 'world',
        number: '2:54',
        name: 'Время на сайте',
    },

    {
        id: 3,
        icon: 'task-3',
        number: '> 128 000',
        name: 'Уникальные пользователи*',
    },
    {
        id: 4,
        icon: 'task-2',
        number: '> 530 000',
        name: 'Просмотры*',
    },
];

export const sectionAdvertising: StatisticPoints[] = [
    {
        title: 'Пол',
        img: 'sex',
        points: [
            {
                name: 'Мужчины',
                value: '49%',
            },
            {
                name: 'Женщины',
                value: '51%',
            },
        ],
    },
    {
        title: 'Возраст',
        img: 'age',
        points: [
            {
                name: 'от 24 до 34 лет',
                value: '31%',
            },
            {
                name: 'от 35 до 44 лет',
                value: '20%',
            },
            {
                name: 'от 45 до 54 лет',
                value: '9%',
            },
            {
                name: 'от 18 до 24 лет',
                value: '6%',
            },
            {
                name: 'от 55',
                value: '5%',
            },
        ],
    },
    {
        title: 'Интересы',
        img: 'interests',
        points: [
            {
                name: 'Развлечение и досуг',
                value: '24.9%',
            },
            {
                name: 'Финансы',
                value: '20.1%',
            },
            {
                name: 'Бизнес',
                value: '19.6%',
            },
            {
                name: 'Строительство и ремонт',
                value: '18.7%',
            },
            {
                name: 'Отдых и путешествия',
                value: '16.6%',
            },
        ],
    },
    {
        title: 'Платформы',
        img: 'platforms',
        points: [
            {
                name: 'Смартфоны и планшеты',
                value: '50%',
            },
            {
                name: 'ПК',
                value: '50%',
            },
        ],
    },
]

export const placeAccommodations = [
    {
        value: '1500 за 1000 показов',
        name: 'Баннерное место №1 (Слайдер) Размер 1340х400'
    },
    {
        value: '600 за 1000 показов',
        name: 'Баннерное место №2 (Левый верх) Размер 240х400'
    },
    {
        value: '500 за 1000 показов',
        name: 'Баннерное место №3 (Левый середина) Размер 240х400'
    },
    {
        value: '400 за 1000 показов',
        name: 'Баннерное место №4 (Левый низ) Размер 240х400'
    },
]
