<template>
    <div class="ui-views-setting">
        <UiChoices v-model:checked="views" @update:checked="handleChoice" value="rows" name="view" class="ui-views-setting__views ui-views-setting-views" inputType="radio">
            <template #visibleElement="{isChecked}">
                <div
                    :class="classesViews(isChecked)"
                    class="ui-views-setting-views__wrap"
                >
                    <svg-icon name="viewRows" class="ui-views-setting-views__icon" />
                </div>
            </template>
        </UiChoices>
        <UiChoices v-model:checked="views" @update:checked="handleChoice" value="tiles" name="view" class="ui-views-setting__views ui-views-setting-views" inputType="radio">
            <template #visibleElement="{isChecked}">
                <div
                    :class="classesViews(isChecked)"
                    class="ui-views-setting-views__wrap "
                >
                    <svg-icon name="tiles" class="ui-views-setting-views__icon" />
                </div>
            </template>
        </UiChoices>
    </div>
</template>

<script setup lang="ts">
const views: Ref<string> = ref('rows');
const emit = defineEmits(['change']);

const classesViews = (isChecked: boolean) => ({
    'ui-views-setting-views__wrap--active': isChecked,
})
const handleChoice = (value: string) => {
    views.value = value;
    emit('change', value)
}
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-views-setting.scss";
</style>
