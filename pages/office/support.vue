<template>
    <OfficeLayout title="Поддержка" countObjects="25" class="support-page">
        <main class="support-page__main">
            <div class="support-page__filters">
                <ul class="support-page__tabs support-page-tabs">
                    <li v-for="tab in tabs" :key="`support-page-tabs-${tab.id}`" class="support-page-tabs__item">
                        <div class="support-page-tabs__tab support-tabs">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="support-tabs__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="support-tabs__wrap"
                                    >
                                        <span class="support-tabs__text">{{tab.name}}</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="support-page__appeals">
                <li class="support-page__item">
                    <OfficeSupportArticle number="2356" title="Мои заявки" class="support-page__article" />
                </li>
                <li class="support-page__item">
                    <OfficeSupportArticle number="2356" title="Мои заявки" class="support-page__article" />
                </li>
                <li class="support-page__item">
                    <OfficeSupportArticle number="2356" title="Мои заявки" class="support-page__article" />
                </li>
                <li class="support-page__item">
                    <OfficeSupportArticle number="2356" title="Мои заявки" class="support-page__article" />
                </li>
            </ul>
            <UiPagination countPage="5" class="support-page__navigation" />
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
const tabs = [
    {
        id: 0,
        name: 'Все',
    },
    {
        id: 1,
        name: 'Активные',
    },
    {
        id: 2,
        name: 'Завершённые',
    },
];
const activeTab: Ref<number> = ref(0);

const classesTabs = (isChecked: boolean) => ({
    'support-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/support-page.scss';
</style>
