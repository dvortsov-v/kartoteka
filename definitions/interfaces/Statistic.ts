export interface StatisticCase {
    id: number,
    icon: string,
    number: string,
    name: string,
}

export interface StatisticPoint {
    name: string,
    value: string,
}

export interface StatisticPoints {
    title: string,
    img?: string,
    points: StatisticPoint[],
}

