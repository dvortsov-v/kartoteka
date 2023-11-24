export interface StatisticCase {
    id: number,
    icon: string,
    number: string,
    name: string,
}

export interface StatisticPoint {
    name: string,
    value?: string,
    img?: string,
}

export interface StatisticPoint {
    title: string,
    description?: string,
    points: StatisticPoint[],
}

