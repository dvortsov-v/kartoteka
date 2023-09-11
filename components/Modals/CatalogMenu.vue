<template>
    <div class="modal-catalog-menu">
        <div class="modal-catalog-menu__wrap">
            <ul class="modal-catalog-menu__list">
                <li
                    v-for="category in categories"
                    :key="`catalog-menu-category-${category.id}`"
                    class="modal-catalog-menu__item"
                >
                    <NuxtLink @mouseover="handleHoverCategory(category)" class="modal-catalog-menu__category modal-catalog-menu-category">
                        <div class="modal-catalog-menu-category__wrap">
                            <span class="modal-catalog-menu-category__name">{{category.name}}</span>
                            <span class="modal-catalog-menu-category__count">{{category.count}}</span>
                        </div>
                        <svg-icon name="chevron-right" class="modal-catalog-menu-category__arrow" />
                    </NuxtLink>
                </li>
            </ul>
            <div v-if="currentCategory?.subcategories.length > 0" class="modal-catalog-menu__subcategory modal-catalog-menu-subcategory">
                <div class="modal-catalog-menu-subcategory__head">
                    <h4 class="modal-catalog-menu-subcategory__title">{{ currentCategory.name }}</h4>
                </div>
                <ul class="modal-catalog-menu-subcategory__list">
                    <li
                        v-for="subcategories in currentCategory?.subcategories"
                        :key="`catalog-menu-subcategory-${subcategories.id}`"
                        class="modal-catalog-menu-subcategory__item"
                    >
                        <NuxtLink class="modal-catalog-menu-subcategory__category modal-catalog-menu-category modal-catalog-menu-category--sub">
                            <div class="modal-catalog-menu-category__wrap">
                                <span class="modal-catalog-menu-category__name">{{subcategories.name}}</span>
                                <span class="modal-catalog-menu-category__count">{{subcategories.count}}</span>
                            </div>
                            <svg-icon name="chevron-right" class="modal-catalog-menu-category__arrow" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {categories, Category} from "@/constants/categories";

const currentCategory: Ref<Category | never | undefined> = ref();
const handleHoverCategory = (category: Category) => {
    if(category?.subcategories && category?.subcategories.length > 0) {
        currentCategory.value = category;
        return;
    }

    currentCategory.value = undefined;
}

onUnmounted(() => {
    currentCategory.value = undefined;
})
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-menu.scss';
</style>
