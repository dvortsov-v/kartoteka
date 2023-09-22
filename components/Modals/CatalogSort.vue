<template>
    <VueFinalModal>
        <div class="modal-catalog-sort">
            <div class="catalog-page-main-sort__filters-top">
                <span class="catalog-page-main-sort__filters-name">Сортировка</span>
                <button @click="emit('close')" class="catalog-page-main-sort__filters-close">
                    <svg-icon name="close"/>
                </button>
            </div>
            <UiChoices
                v-for="sortItem in sortList"
                :key="`catalog-page-sort-${sortItem.value}`"
                v-model:checked="typeSorting"
                @update:checked="resetSortDescending"
                :value="sortItem.value"
                name="sort"
                class="catalog-page-main-sort__filters-tab"
                inputType="radio"
            >
                <template #visibleElement="{isChecked}">
                    <div
                        :class="classesSort(isChecked)"
                        class="catalog-page-main-sort__filters-wrap"
                    >
                    <span
                        @click="toogleSortDescending"
                        class="catalog-page-main-sort__filters-text"
                    >
                        {{ sortItem.text }}
                    </span>
                    </div>
                </template>
            </UiChoices>
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import {useCategoriesStore} from "~/store/useCategoriesStore";
const categoriesStore =  useCategoriesStore()

const emit = defineEmits<{
    (e: 'close'): void
}>();

const typeSorting: Ref<string> = ref('price');
const sortDescending: Ref<boolean> = ref(false);
const sortList = [
    {
        value: 'min-popular',
        text: 'по популярности (мин)',
    },
    {
        value: 'max-popular',
        text: 'по популярности (макс)',
    },
    {
        value: 'min-price',
        text: 'по цене (мин)',
    },
    {
        value: 'max-price',
        text: 'по цене (макс)',
    },
    {
        value: 'min-date',
        text: 'по дате добавления (мин)',
    },
    {
        value: 'max-date',
        text: 'по дате добавления (макс)',
    },
]

const classesSort = (isChecked: boolean) => ({
    'catalog-page-main-sort__wrap--active': isChecked,
    'catalog-page-main-sort__wrap--desc' : unref(sortDescending)
})
const toogleSortDescending = () => {
    sortDescending.value = !sortDescending.value;
}
const resetSortDescending = (newValue: string) => {
    sortDescending.value = false;
    typeSorting.value = newValue
}
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-sort.scss';
</style>
