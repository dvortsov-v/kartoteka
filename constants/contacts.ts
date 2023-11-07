interface Contacts {
    id: number,
    title: string,
    phone: string,
    additionalPhone?: string,
    office?: string,
    mail?: string,
}
export const contacts: Contacts[]= [
    {
        id: 1,
        title: 'По вопросам размещения объявлений',
        phone: '+78001008555',
        office: '(доб. 269)',
        mail: 'info@kartoteka.ru',
    },
    {
        id: 2,
        title: 'Отдел рекламы',
        phone: '+78001008555',
        office: '(доб. 126)',
        mail: 'pr@kartoteka.ru',
    },
    {
        id: 3,
        title: 'Тех. поддержка',
        phone: '+78001008555',
        office: '(доб. 296)',
        mail: 'qa@kartoteka.ru',
    },
]
