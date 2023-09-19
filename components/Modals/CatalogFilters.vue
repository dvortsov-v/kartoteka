<template>
    <VueFinalModal>
        <div class="modal-catalog-menu">
            <CatalogCategories :categories="categories" class="catalog-page-main__categories" />
            <CatalogFilters class="catalog-page-main__filters" />
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import {categories} from "@/constants/categories";
import { VueFinalModal } from 'vue-final-modal'
</script>

<style scoped lang="scss">
//@import '@/components/Modals/styles/modal-catalog-menu.scss';
</style>
