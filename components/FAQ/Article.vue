<template>
    <details class="faq-article">
        <summary @click="handleToogle" class="faq-article__head">
            <h5 class="faq-article__title h5">{{ title }}</h5>
            <svg-icon class="faq-article__icon" :name="iconAccordion" />
        </summary>
        <div class="faq-article__body">
            <p v-for="item in text">
                {{item }}
            </p>
        </div>
    </details>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    text: Array as PropType<string[]>,
})
const isOpen: Ref<boolean> = ref(false);

const handleToogle = () => {
    isOpen.value = !isOpen.value;
}
const iconAccordion = computed(() => unref(isOpen) ? 'minus' : 'plus');
</script>

<style scoped lang="scss">
@import "@/components/FAQ/styles/faq-article.scss";
</style>
