<template>
    <VueFinalModal>
        <div class="modal-catalog-menu">
            
            <CatalogCategories :categories="categoriesStore.categories" class="catalog-page-main__categories" />
            <CatalogFilters class="catalog-page-main__filters" />
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import {useCategoriesStore} from "~/store/useCategoriesStore";
const categoriesStore =  useCategoriesStore()

</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-menu.scss';
</style>
