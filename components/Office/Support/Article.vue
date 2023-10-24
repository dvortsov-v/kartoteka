<template>
    <details class="support-article">
        <summary @click="handleToogle" class="support-article__head">
            <span class="support-article__wrap">
                <span class="support-article__number">№ {{ number }}</span>
                <h5 class="support-article__title">{{ title }}</h5>
                <CommonStatus theme="green" class="support-article__status">Активно</CommonStatus>
            </span>
            <svg-icon class="support-article__icon" :name="iconAccordion" />
        </summary>
        <div class="support-article__body">
            <div class="support-article__row">
                <span class="support-article__name">Вопрос</span>
                <div class="support-article__text">
                    <p>На маркетплейсе не могу выбрать способ оплаты чтоб разместить заявку</p>
                </div>
            </div>
            <div class="support-article__row support-article__row--answer">
                <span class="support-article__name">Ответ</span>
                <div class="support-article__text">
                    <p>На маркетплейсе обычно предлагают несколько способов оплаты для удобства покупателей. Некоторые из наиболее распространенных способов оплаты включают:</p>
                    <p><b>Оплата банковской картой:</b> это один из наиболее удобных и популярных способов оплаты. Покупатель может использовать кредитную или дебетовую карту для оплаты покупки. Маркетплейс может принимать различные типы кредитных карт, такие как Visa, Mastercard, American Express и другие.</p>
                    <p><b>Электронные кошельки:</b> некоторые маркетплейсы также предлагают оплату через электронные кошельки, такие как PayPal, Яндекс.Деньги, WebMoney, QIWI и т.д.</p>
                </div>
            </div>
        </div>
    </details>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    text: String,
    number: String,
})
const isOpen: Ref<boolean> = ref(false);

const handleToogle = () => {
    isOpen.value = !isOpen.value;
}
const iconAccordion = computed(() => unref(isOpen) ? 'minus' : 'plus');
</script>

<style scoped lang="scss">
@import "@/components/Office/Support/styles/support-article.scss";
</style>
