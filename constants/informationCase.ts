interface InformationCase {
    id: number,
    icon: string,
    name: string,
    extension?: string,
    url?: string,
}
export const informationCase: InformationCase[] = [
    {
        id: 1,
        icon: 'document',
        name: 'Политика в отношении обработки и защиты персональных данных:',
        extension: 'PDF, 343 Кб',
        url: 'data-policy-2023.pdf',
    },
    {
        id: 2,
        icon: 'document',
        name: 'Правила пользования сайтом:',
        extension: 'PDF, 232 Кб',
        url: 'user-agreement.pdf',
    },
    {
        id: 3,
        icon: 'document',
        name: 'Описание деятельности:',
        extension: 'PDF, 2,7 Мб',
        url: 'information-about.pdf',
    },
];
