<template>
    <div class="faq-page">
        <UiContainer class="faq-page__wrapper">
            <UiBreadcrumbs class="faq-page__breadcrumbs"/>
            <h1 class="faq-page__title h1">Помощь</h1>
            <main class="faq-page__main">
                <ul class="faq-page__tabs faq-tabs">
                    <li v-for="tab in tabsFaq" :key="`faq-tab-${tab.typeId}`" class="faq-tabs__item">
                        <div class="faq-tabs__tab faq-category">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.typeId" name="view" class="faq-category__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="faq-category__wrap"
                                    >
                                        <span class="faq-category__text">{{tab.type}}</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <ul class="faq-page__articles faq-articles">
                    <li v-for="faq in filteredFaq" class="faq-articles__item">
                        <FAQArticle :title="faq.title" :text="faq.text" class="faq-articles__article" />
                    </li>
                </ul>
            </main>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {faq} from "~/constants/tabsFaq";
import {FaqTabs} from "~/definitions/interfaces/FaqTabs";

useHead({
    title: 'Помощь',
});
definePageMeta({
    nameRoute: 'Помощь',
});

const activeTab: Ref<number> = ref(0);

const tabsFaq = faq.reduce((acc: FaqTabs[], current) => {
    if (!acc.some((item) => item.typeId === current.typeId)) {
        acc.push({
            typeId: current.typeId,
            type: current.type,
        });
    }
    acc.push()

    return acc;
}, [{typeId: 0, type: 'Все'}]);

const filteredFaq = computed(() => {
    if(!activeTab.value) {
        return faq;
    }
    console.log()

    return faq.filter(item => item.typeId === activeTab.value)
})

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
