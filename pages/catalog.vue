<template>
    <div class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs class="catalog-page__breadcrumbs"/>
            <template v-if="isMainPageCatalog">
                <div class="catalog-page__head">
                    <h1 class="catalog-page__title">Каталог</h1>
                    <span class="catalog-page__count">10000 товаров</span>
                </div>
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
                                <h6 class="catalog-page-filters__title">Цена, ₽</h6>
                                <div class="catalog-page-filters__fields">
                                    <div class="catalog-page-filters__field">
                                        <UiInput type="number" placeholder="от" class="catalog-page-filters__input" />
                                    </div>
                                    <div class="catalog-page-filters__field">
                                        <UiInput type="number" placeholder="до" class="catalog-page-filters__input" />
                                    </div>
                                    <UiSelector v-model="check" inputType="checkbox" class="catalog-page-filters__checkbox" />
                                </div>
                            </div>
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title">Статус объекта</h6>
                                <ul class="catalog-page-filters__list">
                                    <li class="catalog-page-filters__item">
                                        <div class="catalog-page-filters__status"></div>
                                    </li>
                                </ul>
                                <UiButtonLink class="catalog-page-filters-statuses__more">Показать еще</UiButtonLink>
                            </div>
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title">Цена, ₽</h6>
                                <div class="catalog-page-filters__fields">
                                    <div class="catalog-page-filters__field">
                                        <UiInput type="number" placeholder="от" class="catalog-page-filters__input" />
                                    </div>
                                    <div class="catalog-page-filters__field">
                                        <UiInput type="number" placeholder="до" class="catalog-page-filters__input" />
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-page-filters__section">
                                <h6 class="catalog-page-filters__title">Регион имущества</h6>
                            </div>
                            <UiButton type="submit" class="catalog-page-filters__more">Показать еще</UiButton>
                            <UiButtonLink type="reset" class="catalog-page-filters__more">Сбросить</UiButtonLink>
                        </div>
                    </aside>
                    <section class="catalog-page-main__section">
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
const check = ref(false);
const isMainPageCatalog = route.path === '/catalog';

useHead({
    title: 'Каталог',
});
definePageMeta({
    name: 'Каталог',
});

</script>

<style scoped lang="scss">
@import "@/pages/styles/catalog-page.scss";
</style>
