<template>
    <OfficeLayout title="Предложения" :countObjects="products.length" class="offer-page">
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
            <ul
                :class="classesList"
                class="offer-page__list"
            >
                <li v-for="product in products" class="offer-page__item">
                    <OfficeOfferProduct
                        :product="product"
                        :isCompactedView="isCompactedView"
                        class="offer-page__product"
                    />
                </li>
            </ul>
            <UiPagination :paginationDate="paginationDate" class="offer-page__navigation" />
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useProducts} from "~/composable/request/useProducts";

const {
    products,
    paginationDate,
    getProducts,
} = useProducts()

getProducts()
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

const classesList = computed(() => ({
    'offer-page__list--is-compacted-view': unref(isCompactedView),
}))
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/offer-page.scss';
</style>
