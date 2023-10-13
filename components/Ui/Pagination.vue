<template>
    <div class="ui-page-navigation">
        <ul class="ui-page-navigation__pagination ui-pagination">
            <li v-for="link in paginationDate.links" class="ui-pagination__item">
                <UiButton
                    @click="handleClick(link.label)"
                    theme="transparent"
                    :class="classesItem(link.active)"
                    class="ui-pagination__button ui-pagination__button--border"
                >
                <span class="ui-pagination__text">
                    {{link.label}}
                </span>
                </UiButton>
            </li>
            <li v-if="countPage > maxVisibleCount" class="ui-pagination__item">
                <UiButton
                    theme="transparent"
                    class="ui-pagination__button"
                >
                <span class="ui-pagination__text">
                    ...
                </span>
                </UiButton>
            </li>
            <li class="ui-pagination__item">
                <UiButton
                    theme="transparent"
                    class="ui-pagination__button ui-pagination__button--border ui-pagination__button--circle"
                >
                    <svg-icon name="arrow-right" class="ui-pagination__icon" />
                </UiButton>
            </li>
        </ul>
        <UiButton v-if="false" theme="transparent" class="ui-page-navigation__more">
            <svg-icon
                name="adding"
                class="ui-page-navigation__icon"
            />
            <span class="ui-page-navigation__text">
                                Показать ещё
                            </span>
        </UiButton>
        <span class="ui-page-navigation__show ui-page-navigation-show">
            <span class="ui-page-navigation-show__text">Показано:</span>
            <span class="ui-page-navigation-show__count">{{ paginationDate.per_page }} из {{ paginationDate.total }}</span>
        </span>
    </div>
</template>

<script setup lang="ts">
import {MetaProduct} from "~/definitions/interfaces/Products";
import {PropType} from "@vue/runtime-core";

const props = defineProps({
    countPage: {type: Number, default: 0},
    currentPage: {type: Number, default: 1},
    paginationDate: {
        type: Object as PropType<MetaProduct>,
        default: () => ({})
    },
});
const filteredPagination = computed(() => {
    return props.paginationDate?.links.filter(link => link.url);
})
const router = useRouter();
const maxVisibleCount = 4;
const handleClick = (numberPage: number) => {
    router.push({query: {page: numberPage}})
}
const classesItem = (active: boolean) => ({'ui-pagination__button--active': active})
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-pagination.scss";
</style>
