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
                @focus="toogleIsShowResultSearch"
                @blur="toogleIsShowResultSearch"
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
            <ul class="search-field-results__list">
                <li class="search-field-results__item">
                    <NuxtLink :to="`/catalog`" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, autem commodi consequatur deleniti eius eos, ipsum laudantium nemo neque nihil officiis pariatur perferendis provident sequi ullam velit veniam!
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
                <li class="search-field-results__item">
                    <NuxtLink :to="`/catalog`" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, autem commodi consequatur deleniti eius eos, ipsum laudantium nemo neque nihil officiis pariatur perferendis provident sequi ullam velit veniam!
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
                <li class="search-field-results__item">
                    <NuxtLink :to="`/catalog`" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, autem commodi consequatur deleniti eius eos, ipsum laudantium nemo neque nihil officiis pariatur perferendis provident sequi ullam velit veniam!
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
                <li class="search-field-results__item">
                    <NuxtLink :to="`/catalog`" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, autem commodi consequatur deleniti eius eos, ipsum laudantium nemo neque nihil officiis pariatur perferendis provident sequi ullam velit veniam!
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
                <li class="search-field-results__item">
                    <NuxtLink :to="`/catalog`" class="search-field-results__result search-field-result">
                        <span class="search-field-result__name">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur, autem commodi consequatur deleniti eius eos, ipsum laudantium nemo neque nihil officiis pariatur perferendis provident sequi ullam velit veniam!
                        </span>
                        <svg-icon name="chevron-right" class="search-field-result__arrow" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
const isShowResultSearch = ref(false);
const toogleIsShowResultSearch = () => {
    isShowResultSearch.value = !isShowResultSearch.value;
};
const classesBtn = computed(() => ({'search-field__submit--focus': unref(isShowResultSearch)}));
const classesWrapper = computed(() => ({'search-field__wrap--focus': unref(isShowResultSearch)}));
const classesField = computed(() => ({'search-field--focus': unref(isShowResultSearch)}));
</script>
<style scoped lang="scss">
@import "@/components/Header/styles/search-field.scss";
</style>

