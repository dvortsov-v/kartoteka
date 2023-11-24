import {StatisticCase, StatisticPoint} from "~/definitions/interfaces/Statistic";

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

export const sectionAdvertising: StatisticPoint[] = [
    {
        title: 'Статистика по Маркетплейс за период 01.05.23 по 31.10.23',
        description: 'Портрет аудитории:',
        points: [
            {
                name: 'Возраст:',
                img: 'age',
            },
            {
                name:'Пол:',
                img: 'sex',
            },
            {
                name: 'Интересы:',
                img: 'interests'
            },
            {
                name: 'Образование:',
                img: 'education'
            },
            {
                name: 'Распределение по платформам:',
                img: 'platforms'
            },
        ]
    },
    {
        title: 'Стоимость размещения баннеров',
        points: [
            {
                name: 'Баннерное место №1 (Слайдер) размер 1340х400',
                value: '1500 ₽ за 1000 показов',
                img: 'banner-1',
            },
            {
                name:'Баннерное место №2 (Левый верх) размер 240х400',
                value: '600 ₽ за 1000 показов',
                img: 'banner-2',
            },
            {
                name: 'Баннерное место №3 (Левый середина) размер 240х400',
                value: '500 ₽ за 1000 показов',
                img: 'banner-3',
            },
            {
                name: 'Баннерное место №4 (Левый низ) размер 240х400',
                value: '400 ₽ за 1000 показов',
                img: 'banner-4',
            },
        ]

    },
]
