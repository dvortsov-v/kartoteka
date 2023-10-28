<template>
    <div class="statistic-page-actions">
        <button
            @click="setIsShowAction"
            type="button"
            class="statistic-page-actions__show"
        >
            <svg-icon name="dots" class="statistic-page-actions__icon"/>
        </button>
        <div
            v-if="isShowAction"
            class="statistic-page-actions__wrap"
        >
            <div class="statistic-page-actions__list">
                <button
                    type="button"
                    class="statistic-page-actions__button"
                >
                    Редактировать
                </button>
                <button
                    type="button"
                    class="statistic-page-actions__button"
                >
                    Снять с продажи
                </button>

            </div>
            <div class="statistic-page-actions__bottom">
                <button
                    type="button"
                    class="statistic-page-actions__button"
                >
                    Удалить

                    <svg-icon name="trash" class="statistic-page-actions__del" />
                </button>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
const isShowAction = ref(false);

const setIsShowAction = () => {
    isShowAction.value = !isShowAction.value
}
</script>

<style scoped lang="scss">
@import "@/components/Office/Statistic/styles/statistic-page-actions.scss";
</style>
