<template>
    <div class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs class="catalog-page__breadcrumbs"/>
            <CatalogHead namePage="Каталог"  class="catalog-page__head" />
            <main class="catalog-page__main catalog-page-main">
                <aside class="catalog-page-main__aside">
                    <CatalogCategories :categories="categories" class="catalog-page-main__categories" />
                    <CatalogFilters class="catalog-page-main__filters" />
                </aside>
                <section class="catalog-page-main__section">
                    <div class="catalog-page-main__maps"></div>
                    <div class="catalog-page-main__settings">
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
                        </div>
                        <CommonViewsSetting @change="changeViews" />
                    </div>
                    <CatalogList :listProducts="listProducts" :isCompactedView="isCompactedView" class="catalog-page-main__list" />
                    <div class="catalog-page-main__navigation catalog-page-main-navigation">
                        <UiPagination countPage="5" class="catalog-page-main-navigation__pagination" />
                        <UiButton theme="transparent" class="catalog-page-main-navigation__more">
                            <svg-icon
                                name="adding"
                                class="catalog-page-main-navigation__icon"
                            />
                            <span class="catalog-page-main-navigation__text">
                                    Показать ещё
                                </span>
                        </UiButton>
                        <span class="catalog-page-main-navigation__show catalog-page-main-navigation-show">
                                <span class="catalog-page-main-navigation-show__text">Показано:</span>
                                <span class="catalog-page-main-navigation-show__count">50 из 120</span>
                            </span>
                    </div>
                </section>
            </main>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {ComputedRef} from "vue";
import {getCategoriesRequest} from "~/api/CategoriesApi";
import {getProductsRequest} from "~/api/ProductsApi";
const categories = await getCategoriesRequest();
const views: Ref<string> = ref('rows');
const listProducts = await getProductsRequest();
useHead({
    title: 'Каталог',
});
definePageMeta({
    name: 'Каталог',
});
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
]

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
