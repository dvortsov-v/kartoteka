<template>
    <div v-if="categoriesStore.categories && products" class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs class="catalog-page__breadcrumbs"/>
            <CatalogHead namePage="Каталог" class="catalog-page__head" />
            <main class="catalog-page__main catalog-page-main">
                <aside class="catalog-page-main__aside">
                    <CatalogCategories :categories="categoriesStore.categories" class="catalog-page-main__categories" />
                    <CatalogFilters class="catalog-page-main__filters" />
                </aside>
                <section class="catalog-page-main__section">
                    <div class="catalog-page-main__maps"></div>
                    <div class="catalog-page-main__settings">
                        <UiButton
                            theme="transparent"
                            @click="modalCatalogFilters.open()"
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
                    <UiPagination :paginationDate="paginationDate" class=" catalog-page-main__navigation" />
                </section>
            </main>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {ComputedRef} from "vue";
import {useModalList} from "~/components/Modals/composable/useModalList";
import {useModalCatalogSort} from "~/components/Modals/composable/useModalCatalogSort";
import {useProducts} from "~/composable/request/useProducts";
import {useCategoriesStore} from "~/store/useCategoriesStore";

const categoriesStore =  useCategoriesStore()

const {
    products,
    paginationDate,
    getProducts,
} = useProducts()

getProducts()

useHead({
    title: 'Каталог',
});
definePageMeta({
    name: 'Каталог',
});
const views: Ref<string> = ref('rows');
const typeSorting: Ref<string> = ref('price');
const sortDescending: Ref<boolean> = ref(false);
const sortList = [
    {
        value: 'popular',
        text: 'по популярности',
    },
    {
        value: 'price',
        text: 'по цене',
    },
    {
        value: 'date',
        text: 'по дате добавления',
    },
];

const {modalCatalogFilters} = useModalList();
const {
    modalCatalogSort,
    findSelectTypeSorting
} = useModalCatalogSort();
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
const classesSort = (isChecked: boolean) => ({
    'catalog-page-main-sort__wrap--active': isChecked,
    'catalog-page-main-sort__wrap--desc' : unref(sortDescending)
})
const resetSortDescending = (newValue: string) => {
    sortDescending.value = false;
    typeSorting.value = newValue
}
const toogleSortDescending = () => {
    sortDescending.value = !sortDescending.value;
}
const changeViews = (value: string) => {
    views.value = value
}

</script>

<style scoped lang="scss">
@import "@/pages/catalog/styles/catalog-page.scss";
</style>
