<template>
    <div class="views-setting">
        <UiChoices v-model:checked="views" @update:checked="handleChoice" value="rows" name="view" class="views-setting__views views-setting-views" inputType="radio">
            <template #visibleElement="{isChecked}">
                <div
                    :class="classesViews(isChecked)"
                    class="views-setting-views__wrap"
                >
                    <svg-icon name="viewRows" class="views-setting-views__icon" />
                </div>
            </template>
        </UiChoices>
        <UiChoices v-model:checked="views" @update:checked="handleChoice" value="tiles" name="view" class="views-setting__views views-setting-views" inputType="radio">
            <template #visibleElement="{isChecked}">
                <div
                    :class="classesViews(isChecked)"
                    class="views-setting-views__wrap "
                >
                    <svg-icon name="tiles" class="views-setting-views__icon" />
                </div>
            </template>
        </UiChoices>
    </div>
</template>

<script setup lang="ts">
const views: Ref<string> = ref('rows');
const emit = defineEmits(['change']);

const classesViews = (isChecked: boolean) => ({
    'views-setting-views__wrap--active': isChecked,
})
const handleChoice = (value: string) => {
    if(window.innerWidth < 670) {
        views.value = 'tiles';
    } else {
        views.value = value;
    }

    emit('change', value)
}

const setViews = () => {
    if(window.innerWidth < 670) {
        handleChoice('tiles')
        return
    }
    handleChoice(unref(views))

}

onMounted(() => {
    setViews();

    window.addEventListener('resize', setViews);
})

onUnmounted(() => {
    window.removeEventListener('resize', setViews);
})
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/views-setting.scss";
</style>
