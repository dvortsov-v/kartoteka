<template>
    <OfficeLayout title="Заявки" countObjects="25" class="offer-page">
        <main class="offer-page__main">
            <div class="offer-page__filters">
                <ul class="offer-page__tabs offer-page-tabs">
                    <li v-for="tab in tabs" :key="`offer-page-tabs-${tab.id}`" class="offer-page-tabs__item">
                        <div class="offer-page-tabs__tab offer-tabs">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="offer-tabs__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="offer-tabs__wrap"
                                    >
                                        <span class="offer-tabs__text">{{tab.name}}</span>
                                        <span class="offer-tabs__count">15</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <CommonViewsSetting class="offer-page__view" @change="changeViews" />
            </div>
            <OfficeOfferProduct
                class="offer-page__product"
            />
            <div class="offer-page__navigation offer-page-navigation">
                <UiPagination countPage="5" class="offer-page-navigation__pagination" />
                <UiButton theme="transparent" class="offer-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="offer-page-navigation__icon"
                    />
                    <span class="offer-page-navigation__text">
                                Показать ещё
                            </span>
                </UiButton>
                <span class="offer-page-navigation__show offer-page-navigation-show">
                    <span class="offer-page-navigation-show__text">Показано:</span>
                    <span class="offer-page-navigation-show__count">50 из 120</span>
                </span>
            </div>
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useProductsStore} from "~/store/useProductsStore";
const productsStore = useProductsStore();
productsStore.getProducts();

definePageMeta({
    layout: 'office',
})
const tabs = [
    {
        id: 0,
        name: 'Все',
    },
    {
        id: 1,
        name: 'В обработке',
    },
    {
        id: 2,
        name: 'Выполнены',
    },
];
const views: Ref<string> = ref('rows');
const activeTab: Ref<number> = ref(0);

const changeViews = (value: string) => {
    views.value = value
}
const classesTabs = (isChecked: boolean) => ({
    'offer-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/offer-page.scss';
</style>
