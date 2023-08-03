<template>
    <div class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs class="catalog-page__breadcrumbs"/>
            <template v-if="isMainPageCatalog">
                <CatalogHead class="catalog-page__head" />
                <main class="catalog-page__main catalog-page-main">
                    <aside class="catalog-page-main__aside">
                        <ul class="catalog-page-main__categories catalog-page-categories">
                            <li
                                v-for="category in categories"
                                :key="`catalog-page-category-${category.id}`"
                                class="catalog-page-categories__item"
                            >
                                <NuxtLink class="catalog-page-category">
                                    <span class="catalog-page-category__name">{{category.name}}</span>
                                    <span class="catalog-page-category__count">{{category.count}}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                        <div class="catalog-page-main__filters catalog-page-filters">
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title catalog-page-filters-title">Цена, ₽</h6>
                                <div class="catalog-page-filters__fields catalog-page-filters-fields">
                                    <div class="catalog-page-filters-fields__field">
                                        <UiInput type="number" placeholder="от" class="catalog-page-filters-fields__input" />
                                    </div>
                                    <div class="catalog-page-filters-fields__field">
                                        <UiInput type="number" placeholder="до" class="catalog-page-filters-fields__input" />
                                    </div>
                                </div>
                                <ul class="catalog-page-filters__list catalog-page-filters-list">
                                    <li class="catalog-page-filters-list__item">
                                        <UiChoices
                                            v-model:checked="onlyPhoto"
                                            class="catalog-page-filters-checkbox"
                                        >
                                            <span class="catalog-page-filters-checkbox__text">
                                                Только с фото
                                            </span>
                                        </UiChoices>
                                    </li>
                                    <li class="catalog-page-filters-list__item">
                                        <UiChoices
                                            v-model:checked="partOfLot"
                                            class="catalog-page-filters-checkbox"
                                        >
                                            <span class="catalog-page-filters-checkbox__text">
                                                В составе лота
                                            </span>
                                            <div class="catalog-page-filters__hint"></div>
                                        </UiChoices>
                                    </li>
                                </ul>
                            </div>
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title catalog-page-filters-title">Статус объекта</h6>
                                <ul class="catalog-page-filters__list catalog-page-filters-list">
                                    <li
                                        v-for="status in listStatus"
                                        :key="`catalog-page-status-${status.id}`"
                                        class="catalog-page-filters-list__item"
                                    >
                                        <UiChoices
                                            v-model:checked="status.value"
                                            class="catalog-page-filters__checkbox catalog-page-filters-checkbox"
                                        >
                                            <span class="catalog-page-filters-checkbox__text">
                                                {{ status.name }}
                                            </span>
                                        </UiChoices>
                                    </li>
                                </ul>
                                <UiButtonLink class="catalog-page-filters__more catalog-page-filters-more">
                                    <svg-icon name="adding" class="catalog-page-filters-more__icon" />
                                    <span class="catalog-page-filters-more__text">
                                        Показать еще
                                    </span>
                                </UiButtonLink>
                            </div>
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title catalog-page-filters-title">Период торгов</h6>
                                <div class="catalog-page-filters__fields catalog-page-filters-fields">
                                    <div class="catalog-page-filters-fields__field">
                                        <UiInput type="number" placeholder="от" class="catalog-page-filters-fields__input" />
                                    </div>
                                    <div class="catalog-page-filters-fields__field">
                                        <UiInput type="number" placeholder="до" class="catalog-page-filters-fields__input" />
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title catalog-page-filters-title">Регион имущества</h6>
                                <div class="catalog-page-filters__fields catalog-page-filters-fields">
                                    <div class="catalog-page-filters-fields__field">
                                        <UiInput type="number" placeholder="от" class="catalog-page-filters-fields__input" />
                                    </div>
                                </div>
                            </div>
                            <UiButton type="submit" class="catalog-page-filters__more">Показать 1 453 товаров</UiButton>
                            <UiButtonLink type="reset" class="catalog-page-filters__more">Сбросить</UiButtonLink>
                        </div>
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
                            <div class="catalog-page-main__views">
                                <UiChoices v-model:checked="views" value="rows" name="view" class="catalog-page-main__views catalog-page-main-views" inputType="radio">
                                    <template #visibleElement="{isChecked}">
                                        <div
                                            :class="classesViews(isChecked)"
                                            class="catalog-page-main-views__wrap"
                                        >
                                            <svg-icon name="viewRows" class="catalog-page-main-views__icon" />
                                        </div>
                                    </template>
                                </UiChoices>
                                <UiChoices v-model:checked="views" value="tiles" name="view" class="catalog-page-main__views catalog-page-main-views" inputType="radio">
                                    <template #visibleElement="{isChecked}">
                                        <div
                                            :class="classesViews(isChecked)"
                                            class="catalog-page-main-views__wrap "
                                        >
                                            <svg-icon name="tiles" class="catalog-page-main-views__icon" />
                                        </div>
                                    </template>
                                </UiChoices>
                            </div>
                        </div>
                        <ul class="catalog-page-main__list">
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                            <li class="catalog-page-main__item">
                                <CommonCardProduct />
                            </li>
                        </ul>
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
            </template>
            <NuxtPage v-else />
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {categories} from '@/constants/categories'
const route = useRoute();

const onlyPhoto: Ref<boolean> = ref(false);
const partOfLot: Ref<boolean> = ref(false);
const views: Ref<string> = ref('rows');
const typeSorting: Ref<string> = ref('price');
const sortDescending: Ref<boolean> = ref(false);

const listStatus: Ref<{id: number, name: string, value: boolean}[]> = ref([
    {
        id: 0,
        name: 'Проведена инвентаризация',
        value: false,
    },
    {
        id: 1,
        name: 'Проведена оценка',
        value: false,
    },
    {
        id: 2,
        name: 'Объявлены торги',
        value: false,
    },
    {
        id: 3,
        name: 'Идут торги',
        value: false,
    },
    {
        id: 4,
        name: 'Торги завершены, имущество не продано',
        value: false,
    },
])
const isMainPageCatalog = route.path === '/catalog';

useHead({
    title: 'Каталог',
});
definePageMeta({
    name: 'Каталог',
});

const classesSort = (isChecked: boolean) => ({
    'catalog-page-main-sort__wrap--active': isChecked,
    'catalog-page-main-sort__wrap--desc' : unref(sortDescending)
})
const classesViews = (isChecked: boolean) => ({
    'catalog-page-main-views__wrap--active': isChecked,
})

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

const resetSortDescending = (newValue: string) => {
    sortDescending.value = false;
    typeSorting.value = newValue
}
const toogleSortDescending = () => {
    sortDescending.value = !sortDescending.value;
}

</script>

<style scoped lang="scss">
@import "@/pages/styles/catalog-page.scss";
</style>
