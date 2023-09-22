<template>
    <div class="faq-page">
        <UiContainer class="faq-page__wrapper">
            <UiBreadcrumbs class="faq-page__breadcrumbs"/>
            <h1 class="faq-page__title h1">Помощь</h1>
            <main class="faq-page__main">
                <ul class="faq-page__tabs faq-tabs">
                    <li v-for="tab in tabsFaq" :key="`faq-tab-${tab.id}`" class="faq-tabs__item">
                        <div class="faq-tabs__tab faq-category">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="faq-category__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="faq-category__wrap"
                                    >
                                        <span class="faq-category__text">{{tab.name}}</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <ul class="faq-page__articles faq-articles">
                    <li class="faq-articles__item">
                        <FAQArticle title="Какие способы оплаты доступны на маркетплейсе?" class="faq-articles__article" />
                    </li>
                    <li class="faq-articles__item">
                        <FAQArticle title="Какие условия доставки товаров предоставляются продавцами?" class="faq-articles__article" />
                    </li>
                    <li class="faq-articles__item">
                        <FAQArticle title="Какие гарантии и возвратные условия действуют на маркетплейсе?" class="faq-articles__article" />
                    </li>
                    <li class="faq-articles__item">
                        <FAQArticle title="Как проверяется качество товаров" class="faq-articles__article" />
                    </li>
                </ul>
            </main>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {tabsFaq} from "~/constants/tabsFaq";

useHead({
    title: 'Помощь',
});
definePageMeta({
    name: 'Помощь',
});

const activeTab: Ref<number> = ref(1);

const classesTabs = (isChecked: boolean) => ({
    'faq-category__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
</script>

<style scoped lang="scss">
@import "@/pages/faq/styles/faq-page.scss";
</style>
