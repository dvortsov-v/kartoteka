<template>
    <details class="faq-article">
        <summary @click="handleToogle" class="faq-article__head">
            <span class="faq-article__title">{{ title }}</span>
            <svg-icon class="faq-article__icon" :name="iconAccordion" />
        </summary>
        <div class="faq-article__body">
            <p>На маркетплейсе обычно предлагают несколько способов оплаты для удобства покупателей. Некоторые из наиболее распространенных способов оплаты включают:</p>
            <p><b>Оплата банковской картой:</b> это один из наиболее удобных и популярных способов оплаты. Покупатель может использовать кредитную или дебетовую карту для оплаты покупки. Маркетплейс может принимать различные типы кредитных карт, такие как Visa, Mastercard, American Express и другие.</p>
            <p><b>Электронные кошельки:</b> некоторые маркетплейсы также предлагают оплату через электронные кошельки, такие как PayPal, Яндекс.Деньги, WebMoney, QIWI и т.д.</p>
        </div>
    </details>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    text: String,
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
