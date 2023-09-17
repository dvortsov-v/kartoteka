<template>
    <div class="main-page-recommendations">
        <div class="main-page-recommendations__wrap">
            <h3 class="main-page-recommendations__title">
                Рекомендуем
            </h3>
            <ul class="main-page-recommendations__list">
                <li v-for="item in 7" class="main-page-recommendations__item">
                    <CommonCardProduct :item="item" />
                </li>
            </ul>
            <UiButton @click="navigateTo('/catalog')" theme="transparent" class="main-page-recommendations__more">
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
