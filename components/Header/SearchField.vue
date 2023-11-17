<template>
    <div
        :class="classesField"
        class="search-field"
    >
        <div
            :class="classesWrapper"
            class="search-field__wrap"
        >
            <input
                v-model="resultSearch"
                @focus="toogleIsShowResultSearch"
                @input="searchDebounce"
                placeholder="Поиск"
                type="text"
                class="search-field__input"
            >
            <div class="search-field__map">
                <svg-icon name="geo" class="search-field__geo" />
                <span class="search-field__in">На карте</span>
            </div>
        </div>
        <UiButton
            @click="goToPageSearch"
            type="submit"
            :class="classesBtn"
            class="search-field__submit"
        >
            <svg-icon name="search" class="search-field__icon" />
            <span class="search-field__text">Найти</span>
        </UiButton>
        <div
            v-if="isShowResultSearch"
            @click.self="closeSearch"
            class="search-field__result search-field-results"
        >
            <ul v-if="isNoEmptyResult" class="search-field-results__list">
                <li
                    v-for="product in searchProducts"
                    :key="`product-search-${product.id}`"
                    class="search-field-results__item"
                >
                    <NuxtLink @click="navigateProduct(product.id)" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            {{ product.name }}
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
            </ul>
            <div v-else-if="isEmptyResult" class="search-field-results__list">
                <p class="search-field-results__empty">По данному запросу нет результатов</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useSearchProducts} from "~/composable/request/useSearchProducts";

const {
    searchProducts,
    getProductInSearch,
    resetProductInSearch,
} = useSearchProducts();
const route = useRoute();
const router = useRouter();

const resultSearch = ref('');
const resultSearchOld = ref('');
const isShowResultSearch = ref(false);
const timer = ref();
const isSearch = ref(false);

const toogleIsShowResultSearch = () => {
    isShowResultSearch.value = !isShowResultSearch.value;
};
const classesBtn = computed(() => ({'search-field__submit--focus': unref(isShowResultSearch)}));
const classesWrapper = computed(() => ({'search-field__wrap--focus': unref(isShowResultSearch)}));
const classesField = computed(() => ({'search-field--focus': unref(isShowResultSearch)}));
const isEmptyResult = computed(() => !unref(searchProducts).length && unref(resultSearch).length > 1);
const isNoEmptyResult = computed(() => unref(searchProducts).length && unref(resultSearch).length > 1);

onUnmounted(() => {
    clearTimeout(timer.value)
})

const searchDebounce = () => {
    router.push({
        query: {
            ...route.query,
            name: unref(resultSearch),
        }
    })

    if(isSearch.value || resultSearch.value === resultSearchOld.value) {
        return
    }

    isSearch.value = true;
    timer.value = setTimeout(async () => {
        getProductInSearch();
        resultSearchOld.value = resultSearch.value;
        isSearch.value = false;
    }, 2000);
}
const navigateProduct = (id: number) => {
    navigateTo({
        path: `/catalog/product/${id}`,
        query: undefined,
    });
    resultSearch.value = '';
    resultSearchOld.value = '';
    resetProductInSearch();
    toogleIsShowResultSearch();
}
const closeSearch = () => {
    router.push({query: {
        ...route.query,
        name: undefined,
    }});
    toogleIsShowResultSearch();
}
const goToPageSearch = () => {
    navigateTo({
        path: '/catalog/search',
        query: route.query,
    }, {open: { target: '_self'}});
    isShowResultSearch.value = false;
}
</script>
<style scoped lang="scss">
@import "@/components/Header/styles/search-field.scss";
</style>

