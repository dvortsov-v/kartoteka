<template>
    <VueFinalModal>
        <div class="modal-catalog-menu">
            <button @click="emit('close')">x</button>
            <UiChoices
                v-for="sortItem in sortList"
                :key="`catalog-page-sort-${sortItem.value}`"
                v-model:checked="typeSorting"
                @update:checked="resetSortDescending"
                :value="sortItem.value"
                name="sort"
                class="catalog-page-main-sort__tab"
                inputType="radio"
            >
                <template #visibleElement="{isChecked}">
                    <div
                        :class="classesSort(isChecked)"
                        class="catalog-page-main-sort__wrap"
                    >
                            <span
                                @click="toogleSortDescending"
                                class="catalog-page-main-sort__text"
                            >
                                {{ sortItem.text }}
                            </span>
                        <svg-icon
                            v-if="isChecked"
                            name="select-down" class="catalog-page-main-sort__icon"
                        />
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
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-menu.scss';
</style>