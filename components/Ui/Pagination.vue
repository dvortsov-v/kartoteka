<template>
    <div class="ui-page-navigation">
        <ul class="ui-page-navigation__pagination ui-pagination">
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
        <UiButton theme="transparent" class="ui-page-navigation__more">
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
            <span class="ui-page-navigation-show__count">50 из 120</span>
        </span>
    </div>
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
