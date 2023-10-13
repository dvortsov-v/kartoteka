<template>
    <OfficeLayout title="Заявки" countObjects="25" class="orders-page">
        <main class="orders-page__main">
            <div class="orders-page__filters">
                <ul class="orders-page__tabs orders-page-tabs">
                    <li v-for="tab in tabs" :key="`orders-page-tabs-${tab.id}`" class="orders-page-tabs__item">
                        <div class="orders-page-tabs__tab orders-tabs">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="orders-tabs__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="orders-tabs__wrap"
                                    >
                                        <span class="orders-tabs__text">{{tab.name}}</span>
                                        <span class="orders-tabs__count">15</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <CommonViewsSetting class="orders-page__view" @change="changeViews" />
            </div>
            <CommonProductList
                :listProducts="productsStore.products"
                :isCompactedView="isCompactedView"
                isProductInOrder
                class="orders-page__products"
            />
            <div class="orders-page__navigation orders-page-navigation">
                <UiPagination countPage="5" class="orders-page-navigation__pagination" />
                <UiButton theme="transparent" class="orders-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="orders-page-navigation__icon"
                    />
                    <span class="orders-page-navigation__text">
                                Показать ещё
                            </span>
                </UiButton>
                <span class="orders-page-navigation__show orders-page-navigation-show">
                            <span class="orders-page-navigation-show__text">Показано:</span>
                            <span class="orders-page-navigation-show__count">50 из 120</span>
                        </span>
            </div>
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useProductsStore} from "~/store/useProductsStore";
const productsStore = useProductsStore();
productsStore.getProducts();

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
    'orders-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/orders-page.scss';
</style>
