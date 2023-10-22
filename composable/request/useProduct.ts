import {Product} from "~/definitions/interfaces/Products";
import {getProductRelatedRequest, getProductRequest} from "~/api/ProductsApi";
import {ParceBreadcrumbs, useParceBreadcrumbs} from "~/composable/useParceBreadcrumbs";
import {format} from "date-fns";
import {ComputedRef} from "vue";
import {Social} from "~/constants/socials";
import {ru} from "date-fns/locale";

export const useProduct = () => {
    const route = useRoute();
    const product = ref<Product>({});
    const productRelated = ref<Product[]>([])
    const breadcrumbsDefault: ParceBreadcrumbs[] = [{
        name: 'Каталог',
        path: '/catalog',
    }];

    const getProduct = async () => {
        product.value =  await getProductRequest(route.params.id);
    }

    const getProductRelated = async () => {
        productRelated.value =  await getProductRelatedRequest(route.params.id);
    }

    const breadcrumbs = computed((): ParceBreadcrumbs[] =>  {
        return unref(product)?.category ? breadcrumbsDefault.concat(useParceBreadcrumbs(unref(product).category), [
            {
                name: unref(product).name,
                path: `/catalog/product/${unref(product).id}`,
            }
        ]) : breadcrumbsDefault;
    })


    const tabs = computed(() => unref(product).about.map(section => {
        const {id, title} = section;

        return {id, title}
    }))
    const formattedDate:ComputedRef<string> = computed(() => format(new Date(unref(product).created_at), 'dd.MM.yyyy, HH:mm'))
    const parcedSocials: ComputedRef<Social[]> = computed(() => Object.entries(unref(product).seller.socials).reduce((acc: Social[], current, index: number) => {
        acc.push({
            id: index,
            icon: current[0],
            href: current[1],
        })
        return acc;
    }, []))
    const parcedCreateAt:ComputedRef<string> = computed(() => format(new Date(unref(product).seller.created_at), 'MMMM yyyy', {locale: ru}) )
    const parcedPhone:ComputedRef<string> = computed(() => unref(product).seller.phone.replace(/^\+?(\d)/,''))
    const parcedPhoneHref:ComputedRef<string> = computed(() => unref(product).seller.phone.replace(' ', ''))

    return {
        product,
        tabs,
        formattedDate,
        parcedSocials,
        parcedCreateAt,
        parcedPhone,
        parcedPhoneHref,
        breadcrumbs,
        productRelated,
        getProduct,
        getProductRelated,
    }
}
