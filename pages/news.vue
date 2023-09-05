<template>
    <div class="news-list-page">
        <UiContainer class="news-list-page__wrapper">
            <UiBreadcrumbs class="news-list-page__breadcrumbs"/>
            <h1 class="news-list-page__title">Новости</h1>
            <ul class="news-list-page__list">
                <li v-for="item in 10" class="news-list-page__item">
                    <div class="news-list-page__box news-item">
                        <picture class="news-item__picture">
                            <source
                                srcset="/assets/images/news-item.webp"
                                type="image/webp"
                            >
                            <img
                                src="/assets/images/news-item.jpg"
                                alt="card-product"
                                class="news-item__img"
                            >
                        </picture>
                        <div class="news-item__info">
                            <h4 class="news-item__title">Конференция «Торги по банкротству: новые возможности и перспективы»</h4>
                            <span class="news-item__date">
                                20.03.2022
                                <span class="news-item__time">12:32</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="news-list-page__navigation news-list-page-navigation">
                <UiPagination countPage="5" class="news-list-page-navigation__pagination" />
                <UiButton theme="transparent" class="news-list-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="news-list-page-navigation__icon"
                    />
                    <span class="news-list-page-navigation__text">
                        Показать ещё
                    </span>
                </UiButton>
                <span class="news-list-page-navigation__show news-list-page-navigation-show">
                    <span class="news-list-page-navigation-show__text">Показано:</span>
                    <span class="news-list-page-navigation-show__count">50 из 120</span>
                </span>
            </div>

        </UiContainer>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Новости',
});
definePageMeta({
    name: 'Новости',
});

</script>

<style scoped lang="scss">
@import "@/pages/styles/news-list-page.scss";
</style>
