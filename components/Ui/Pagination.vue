<template>
    <div v-if="paginationDate?.links && (paginationDate?.links?.length > 3)" class="ui-page-navigation">
        <ul class="ui-page-navigation__pagination ui-pagination">
            <li
                v-for="(link, indexLink) in paginationDate.links"
                :key="`ui-pagination-item${link.label}`"
                class="ui-pagination__item"
            >
                <UiButton
                    v-if="link.url"
                    @click="handleClick(link.label)"
                    theme="transparent"
                    :class="classesItem(link.active, indexLink === paginationDate.links[paginationDate.links.length - 1])"
                    class="ui-pagination__button ui-pagination__button--border"
                >
                <span class="ui-pagination__text">
                    <template v-if="indexLink === paginationDate.links.length - 1">
                        <svg-icon name="arrow-right" class="ui-pagination__icon" />
                    </template>
                    <template v-else-if="indexLink === 0">
                        <svg-icon name="arrow-left" class="ui-pagination__icon" />
                    </template>
                    <template v-else>
                        {{link.label}}
                    </template>
                </span>
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
import {PropType} from "@vue/runtime-core";
import {Meta} from "~/definitions/interfaces/Meta";

const props = defineProps({
    paginationDate: {
        type: Object as PropType<Meta>,
        default: () => ({})
    },
});

const router = useRouter();const maxVisibleCount = 4;
const handleClick = (numberPage: string) => {
    if(numberPage.indexOf('Next') + 1) {
        router.push({query: {page: props.paginationDate.current_page + 1}})
        return;
    }
    if(numberPage.indexOf('Previous') + 1) {
        router.push({query: {page: props.paginationDate.current_page - 1}})
        return;
    }
    router.push({query: {page: numberPage}})
}
const classesItem = (active: boolean, isLastElem: boolean) => ({
    'ui-pagination__button--active': active,
    'ui-pagination__button--circle': isLastElem,
})
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-pagination.scss";
</style>
