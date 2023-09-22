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
                v-for="sortItem in typesSortInModal"
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
                    <span class="catalog-page-main-sort__filters-text">
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
import {typesSortInModal} from "~/constants/typesSortInModal";
const categoriesStore =  useCategoriesStore()
const props = defineProps({
    typeSorting: {
        type: String,
        default: 'price',
    }
})
const emit = defineEmits(['updateSort', 'close']);

const typeSorting: Ref<string> = ref('');

const classesSort = (isChecked: boolean) => ({
    'catalog-page-main-sort__wrap--active': isChecked,
})
const resetSortDescending = (newValue: string) => {
    typeSorting.value = newValue
}

watch(typeSorting, (val: string) => {
    emit('updateSort', val);
})
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-sort.scss';
</style>
