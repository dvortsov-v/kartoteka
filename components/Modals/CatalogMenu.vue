<template>
    <div @click="emit('close')" class="modal-catalog-menu">
        <div class="modal-catalog-menu__wrap">
            <ul class="modal-catalog-menu__list">
                <li
                    v-for="category in categoriesStore.categories"
                    :key="`catalog-menu-category-${category.id}`"
                    class="modal-catalog-menu__item"
                >
                    <NuxtLink :to="`/catalog/${category.id}`" @mouseover="handleHoverCategory(category)" class="modal-catalog-menu__category modal-catalog-menu-category">
                        <div class="modal-catalog-menu-category__wrap">
                            <span class="modal-catalog-menu-category__name">{{category.name}}</span>
                            <span class="modal-catalog-menu-category__count">{{category.count}}</span>
                        </div>
                        <svg-icon name="chevron-right" class="modal-catalog-menu-category__arrow" />
                    </NuxtLink>
                </li>
            </ul>
            <div v-if="currentCategory?.sub_categories.length > 0" class="modal-catalog-menu__subcategory modal-catalog-menu-subcategory">
                <div class="modal-catalog-menu-subcategory__head">
                    <h4 class="modal-catalog-menu-subcategory__title">{{ currentCategory.name }}</h4>
                </div>
                <ul class="modal-catalog-menu-subcategory__list">
                    <li
                        v-for="subcategories in currentCategory?.sub_categories"
                        :key="`catalog-menu-subcategory-${subcategories.id}`"
                        class="modal-catalog-menu-subcategory__item"
                    >
                        <NuxtLink :to="`/catalog/${subcategories.id}`" class="modal-catalog-menu-subcategory__category modal-catalog-menu-category modal-catalog-menu-category--sub">
                            <div class="modal-catalog-menu-category__wrap">
                                <span class="modal-catalog-menu-category__name">{{subcategories.name}}</span>
                                <span class="modal-catalog-menu-category__count">{{subcategories.count}}</span>
                            </div>
                            <svg-icon name="chevron-right" class="modal-catalog-menu-category__arrow" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <ul class="modal-catalog-menu__list modal-catalog-menu__list--top">
                <li
                    v-for="menuItem in topMenu"
                    :key="`catalog-menu-category-${menuItem.id}`"
                    class="modal-catalog-menu__item"
                >
                    <NuxtLink :to="menuItem.link" class="modal-catalog-menu__category modal-catalog-menu-category modal-catalog-menu-category--top">
                        <div class="modal-catalog-menu-category__wrap">
                            <span class="modal-catalog-menu-category__name">{{menuItem.name}}</span>
                        </div>
                        <svg-icon name="chevron-right" class="modal-catalog-menu-category__arrow" />
                    </NuxtLink>
                </li>
            </ul>
            <div class="modal-catalog-menu__footer">
                <CommonPhone class="modal-catalog-menu__phone" />
                <CommonAddress class="modal-catalog-menu__address" />
                <CommonSocial class="modal-catalog-menu__socials" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Category} from "~/definitions/interfaces/Categories";
import {topMenu} from '@/constants/top-menu'
import {useCategoriesStore} from "~/store/useCategoriesStore";
const categoriesStore =  useCategoriesStore()

const emit = defineEmits(['close'])

const currentCategory: Ref<Category | null> = ref(null);

onUnmounted(() => {
    currentCategory.value = null;
})
const handleHoverCategory = (category: Category) => {
    if(category?.sub_categories && category?.sub_categories.length > 0) {
        currentCategory.value = category;
        return;
    }

    currentCategory.value = null;
}
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-menu.scss';
</style>
