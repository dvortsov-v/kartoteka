export interface FaqTabs  {
    typeId: number,
    type: string,
}
export interface Faq  {
    id: number,
    typeId: number,
    type: string,
    title: string,
    text: string[],
}
