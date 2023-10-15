export interface Social {
    id: number,
    icon: string,
    href?: string,
}
export const socials: Social[] = [
    {
        id: 1,
        icon: 'vkontakte',
        href: 'https://vk.com',
    },

    {
        id: 2,
        icon: 'telegram',
        href: 'https://telegram.com',
    },
    {
        id: 0,
        icon: 'ok',
        href: 'https://ok.com',
    },
]
