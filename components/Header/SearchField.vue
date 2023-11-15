<template>
    <div
        :class="classesField"
        class="search-field"
    >
        <div
            :class="classesWrapper"
            class="search-field__wrap"
        >
<!--                @blur="toogleIsShowResultSearch"-->
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
            type="submit"
            :class="classesBtn"
            class="search-field__submit"
        >
            <svg-icon name="search" class="search-field__icon" />
            <span class="search-field__text">Найти</span>
        </UiButton>
        <div
            v-if="isShowResultSearch"
            class="search-field__result search-field-results"
        >
            <ul v-if="searchProducts.length" class="search-field-results__list">
                <li
                    v-for="product in searchProducts"
                    :key="`product-search-${product.id}`"
                    class="search-field-results__item"
                >
                    <NuxtLink :to="`/catalog/product/${product.id}`" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            {{ product.name }}
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import {useProducts} from "~/composable/request/useProducts";

const {
    searchProducts,
    getProductInSearch,
} = useProducts();
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

onUnmounted(() => {
    clearTimeout(timer.value)
})

const searchDebounce = () => {
    router.push({
        query: {
            name: unref(resultSearch),
        }
    })

    if(isSearch.value || resultSearch === resultSearchOld) {
        return
    }

    isSearch.value = true;
    timer.value = setTimeout(async () => {
            getProductInSearch();

            resultSearchOld.value = resultSearch.value;

        isSearch.value = false;
    }, 2000);
}
</script>
<style scoped lang="scss">
@import "@/components/Header/styles/search-field.scss";
</style>

