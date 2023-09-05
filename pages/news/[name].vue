<template>
    <div class="news-page">
        <UiContainer class="news-page__wrapper">
            <UiBreadcrumbs class="news-page__breadcrumbs" />
            <main class="news-page__main">
                <h1 class="news-page__title">Регистрация и ликвидация компаний на российском рынке с 2020 по 2022 гг.</h1>
                <p class="news-page__date">20.03.2022, 12:32</p>
                <picture class="news-page__picture">
                    <source
                        srcset="/assets/images/news.webp"
                        type="image/webp"
                    >
                    <img
                        src="/assets/images/news.jpg"
                        alt="News Picture"
                        class="news-page__img"
                    >
                </picture>
                <div class="news-page__text">
                    <p>Представляем сравнительный анализ по количеству зарегистрированных и ликвидированных юридических лиц (ЮЛ) и индивидуальных предпринимателей (ИП) за последние 3 года. Наблюдается рост числа созданных ЮЛ и ИП по сравнению с 2020 годом - за 2021 года на 20,9% и за 2022 год на 20,4%. Отмечается положительная динамика за 2022 год – компаний открывается больше, чем закрывается. Количество регистрируемых ИП продолжает превышать количество ЮЛ. Ликвидация компаний в последние годы сопровождается перетоком работников ЮЛ в категории индивидуальных предпринимателей и самозанятых — бизнес предпочитает переходить в альтернативные режимы, адаптируясь под ковидные ограничения и санкции.</p>
                    <p>За последние 3 года наблюдается оживление предпринимательской активности в России. С 2020 г. выросло число созданных индивидуальных предпринимателей до 825 781 против 806 802 в 2021 г. и 653 384 в 2020 г. При этом число ликвидированных индивидуальных предпринимателей сократилось — до 655 721 против 801 064 за 2021 г. и 955 187 за 2020г. Такая динамика может свидетельствовать о возможной смене тренда и сокращении темпов убыли компаний.</p>
                    <p>Статистика была собрана с помощью нашего сервиса «Выборка», попробовать его можете, перейдя по ссылке.</p>
                </div>
            </main>
            <div class="news-page__additional news-page-additional">
                <NuxtLink to="/news" class="news-page-additional__all">Все новости</NuxtLink>
                <div class="news-page-additional__wrap">
                    <span class="news-page-additional__text">Поделиться:</span>
                    <CommonSocial class="news-page-additional__socials" />
                </div>
            </div>
            <div class="news-page__other news-other">
                <h3 class="news-other__title">Другие новости</h3>
                <ul class="news-other__list">
                    <li v-for="item in 5" class="news-other__item">
                        <NewsItem class="news-other__box" />
                    </li>
                </ul>
            </div>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/pages/news/styles/news-page.scss';
</style>
