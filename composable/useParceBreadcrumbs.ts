import {Breadcrumbs} from "~/definitions/interfaces/Breadcrumbs";
export interface ParceBreadcrumbs {
    name: string,
    path: string,
}
export const useParceBreadcrumbs = (breadcrumbs: Breadcrumbs): ParceBreadcrumbs[] => {
    const acc = [];

    if(breadcrumbs.parent_category) {
        const item = useParceBreadcrumbs(breadcrumbs.parent_category);

        acc.push(...item);
    }
    if(breadcrumbs) {
        acc.push({
            name: breadcrumbs.name,
            path: `/catalog/${breadcrumbs.id}`,
        });
    }

    return acc;
}
