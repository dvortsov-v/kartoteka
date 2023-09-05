<template>
    <div class="news-list-page__box news-item">
        <picture class="news-item__picture">
            <source
                srcset="/assets/images/news-item.webp"
                type="image/webp"
            >
            <img
                src="/assets/images/news-item.jpg"
                alt="News Picture"
                class="news-item__img"
            >
        </picture>
        <div class="news-item__info">
            <h4 class="news-item__title">Конференция «Торги по банкротству: новые возможности и перспективы»</h4>
            <span class="news-item__date">
                20.03.2022
                <span class="news-item__time">12:32</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item"
}
</script>

<style scoped lang="scss">
@import '@/components/News/styles/news-item.scss';
</style>
