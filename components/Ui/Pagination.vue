<template>
    <ul class="ui-pagination">
        <li v-for="item in maxVisibleCount" class="ui-pagination__item">
            <UiButton
                theme="transparent"
                :class="classesItem(item)"
                class="ui-pagination__button ui-pagination__button--border"
            >
                <span class="ui-pagination__text">
                    {{item}}
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
</template>

<script setup lang="ts">
const props = defineProps({
    countPage: {type: Number, default: 0},
    currentPage: {type: Number, default: 1},
});
const maxVisibleCount = 4;

const classesItem = (number: number) => ({'ui-pagination__button--active': number === props.currentPage})
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-pagination.scss";
</style>
