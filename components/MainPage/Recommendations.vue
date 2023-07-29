<template>
    <div class="main-page-recommendations">
        <div class="main-page-recommendations__wrap">
            <h3 class="main-page-recommendations__title">
                Рекомендуем
            </h3>
            <ul class="main-page-recommendations__list">
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
                <li class="main-page-recommendations__item">
                    <CommonProduct />
                </li>
            </ul>
            <UiButton theme="gray" class="main-page-recommendations__more">
                Все предложения
            </UiButton>
        </div>
        <div
            v-if="false"
            class="main-page-recommendations__advertising"
        ></div>
    </div>
</template>

<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-recommendations.scss";
</style>
