<template>
    <div v-if="products.length" class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs :breadcrumbsList="breadcrumbs" class="catalog-page__breadcrumbs"/>
            <CatalogHead :namePage="namePage" :count="countProductOfCategory" class="catalog-page__head" />
            <main class="catalog-page__main catalog-page-main">
                <aside class="catalog-page-main__aside">
                    <CatalogCategories :categories="listCategory" :isCatalogCategory="Boolean($route.params.id)" class="catalog-page-main__categories" />
                    <CatalogFilters
                        :filtersCategory="filtersCategory"
                        class="catalog-page-main__filters"
                    />
                </aside>
                <section class="catalog-page-main__section">
                    <div class="catalog-page-main__maps"></div>
                    <div class="catalog-page-main__settings">
                        <UiButton
                            theme="transparent"
                            @click="openModalCatalogFilters"
                            class="catalog-page-main__filter-open"
                        >
                            <svg-icon name="filter" class="catalog-page-main__filter-svg"/>
                            <span class="ui-pagination__text">
                                Фильтр
                            </span>
                        </UiButton>
                        <div class="catalog-page-main__sort catalog-page-main-sort">
                            <UiChoices
                                v-for="sortItem in sortList"
                                :key="`catalog-page-sort-${sortItem.value}`"
                                v-model:checked="typeSorting"
                                @update:checked="resetSortDescending"
                                :value="sortItem.value"
                                name="sort"
                                class="catalog-page-main-sort__tab"
                                inputType="radio"
                            >
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesSort(isChecked)"
                                        class="catalog-page-main-sort__wrap"
                                    >
                                        <span
                                            @click="toogleSortDescending"
                                            class="catalog-page-main-sort__text"
                                        >
                                            {{ sortItem.text }}
                                        </span>
                                        <svg-icon
                                            v-if="isChecked"
                                            name="select-down" class="catalog-page-main-sort__icon"
                                        />
                                    </div>
                                </template>
                            </UiChoices>
                            <UiButton
                                theme="transparent"
                                @click="modalCatalogSort.open()"
                                class="catalog-page-main-sort__open"
                            >
                                <span class="ui-pagination__text">
                                    {{ findSelectTypeSorting }}
                                </span>
                            </UiButton>
                        </div>
                        <CommonViewsSetting @change="changeViews" />
                    </div>
                    <CommonProductList :listProducts="products" :isCompactedView="isCompactedView" class="catalog-page-main__list" />
                    <UiPagination :paginationDate="paginationDate" class="catalog-page-main__navigation" />
                </section>
            </main>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {useModalList} from "~/components/Modals/composable/useModalList";
import {useModalCatalogSort} from "~/components/Modals/composable/useModalCatalogSort";
import {useProducts} from "~/composable/request/useProducts";
import {useCategory} from "~/composable/request/useCategory";
import {useCategoriesStore} from "~/store/useCategoriesStore";

const route = useRoute();
const router = useRouter();
const categoriesStore = useCategoriesStore()
const {
    products,
    paginationDate,
    countProductOfCategory,
    getProducts,
} = useProducts();

const {
    category,
    breadcrumbs,
    getCategory,
    getBreadcrumbs,
} = useCategory()

const {modalCatalogFilters} = useModalList();
const {
    modalCatalogSort,
    findSelectTypeSorting
} = useModalCatalogSort();

getProducts();

if(route.params.id) {
    getBreadcrumbs();
    getCategory();
}

const namePage = computed(() => unref(category)?.name || 'Каталог')
const filtersCategory = computed(() => unref(category)?.filters || [])

useHead({
    title: unref(namePage),
});

definePageMeta({
    nameRoute: 'Каталог',
});

const views: Ref<string> = ref('rows');

const typeSorting: Ref<string> = ref(route.query?.order_by ? String(route?.query?.order_by) : 'price');
const sortDescending: Ref<boolean> = ref(route.query?.order_type === 'DESC' ?? false);
const sortList = [
    {
        value: 'popularity',
        text: 'по популярности',
    },
    {
        value: 'price',
        text: 'по цене',
    },
    {
        value: 'created_at',
        text: 'по дате добавления',
    },
];

const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
const listCategory = computed(() => {
    if(route.params.id) {
        return unref(category)?.sub_categories || [];
    }
    return categoriesStore.categories;
});
const classesSort = (isChecked: boolean) => ({
    'catalog-page-main-sort__wrap--active': isChecked,
    'catalog-page-main-sort__wrap--desc' : unref(sortDescending)
})
const resetSortDescending = async(newValue: string) => {
    sortDescending.value = false;
    router.push({
        query: {
            ...route.query,
            order_by: newValue,
            order_type: 'DESC',
        }
    })
    typeSorting.value = newValue
}
const toogleSortDescending = () => {
    router.push({
        query: {
            ...route.query,
            order_by: unref(typeSorting),
            order_type: !unref(sortDescending) ? 'ASC' : 'DESC',
        }
    })
    sortDescending.value = !sortDescending.value;
}
const changeViews = (value: string) => {
    views.value = value
}
const {open: openModalCatalogFilters} = modalCatalogFilters()
</script>

<style scoped lang="scss">
@import "@/pages/catalog/styles/catalog-page.scss";
</style>
