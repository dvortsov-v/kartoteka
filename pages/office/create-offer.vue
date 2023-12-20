<template>
    <div class="create-offer-page">
        <UiContainer class="create-offer-page__wrapper">
            <UiBreadcrumbs class="create-offer-page__breadcrumbs"/>
            <h1 class="create-offer-page__title h1">
                Новое предложение
            </h1>
            <main class="create-offer-page__main">
                <form action="" class="create-offer-page__form">
                    <div class="create-offer-page__sections">
                        <details class="create-offer-page__section create-offer-page-section">
                            <summary @click="handleToogleBase" class="create-offer-page-section__head">
                                <h5 class="create-offer-page-section__title h5">Основная информация</h5>
                                <svg-icon class="create-offer-page-section__icon" :name="iconAccordionBase" />
                            </summary>
                            <div class="create-offer-page-section__body">
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Категория</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <UiMultiSelect
                                            v-model="category_id"
                                            :options="categoriesStore.categories"
                                            :searchable="false"
                                            placeholder="Выбрать"
                                            trackBy="id"
                                            label="name"
                                            class="create-offer-page-section__selector"
                                            required
                                        />
                                    </label>
                                </div>
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Название предложения</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <UiInput
                                            v-model="name"
                                            required
                                            placeholder="Введите название"
                                            class="create-offer-field__input"
                                        />
                                    </label>
                                </div>
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Описание</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <textarea
                                            v-model="description"
                                            required
                                            placeholder="Введите текст"
                                            class="create-offer-field__textarea"
                                        />
                                    </label>
                                </div>
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Стоимость, ₽</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <UiInput
                                            v-model="price"
                                            required
                                            type="number"
                                            placeholder="10 000"
                                            class="create-offer-field__input"
                                        />
                                    </label>
                                    <label class="create-offer-page-section__field create-offer-page-section__field--third  create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Количество, шт</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <UiInput
                                            required
                                            type="number"
                                            placeholder="1"
                                            class="create-offer-field__input"
                                        />
                                    </label>
                                </div>
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Регион продажи</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <UiMultiSelect
                                            v-model="region_id"
                                            :options="regions"
                                            :searchable="false"
                                            placeholder="Выбрать"
                                            trackBy="id"
                                            label="name"
                                            class="create-offer-page-section__selector"
                                            required
                                        />
                                    </label>
                                </div>
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Адрес</span>
                                        </span>
                                        <UiInput
                                            v-model="address"
                                            placeholder="Введите адрес"
                                            class="create-offer-field__input"
                                        />
                                    </label>
                                </div>
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Фото</span>
                                        </span>
                                        <span v-bind="getRootProps()" class="create-offer-field__images create-offer-field-images">
                                            <input v-bind="getInputProps()" accept=".png, .jpg, .jpeg, .gif"/>
                                            <ul v-if="acceptedFiles.length > 0" class="create-offer-field-images__list">
                                                <li v-for="file in acceptedFiles" class="create-offer-field-images__item">
                                                    <svg-icon class="create-offer-field-images__accepted" name="check" />
                                                    <span class="create-offer-field-images__note">{{ file.name }}</span>
                                                </li>
                                            </ul>
                                             <template v-else>
                                                <span class="create-offer-field-images__icon">
                                                    <svg-icon class="create-offer-field-images__svg" name="image" />
                                                </span>
                                                <p class="create-offer-field-images__title">Выберите фото или перетащите их <br> в эту область</p>
                                                <ButtonLink @click="open" class="create-offer-field-images__button">Выбрать</ButtonLink>
                                                <span class="create-offer-field-images__note">До 50 файлов в формате jpeg, jpg, png, gif</span>
                                            </template>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </details>
                        <details v-if="filtersCategory.length > 0" class="create-offer-page__section create-offer-page-section">
                            <summary @click="handleToogleCharacteristics" class="create-offer-page-section__head">
                                <h5 class="create-offer-page-section__title h5">Характеристики</h5>
                                <svg-icon class="create-offer-page-section__icon" :name="iconAccordionisOpenCharacteristics" />
                            </summary>
                            <div class="create-offer-page-section__body">
                                <div
                                    v-for="filter in filtersCategory"
                                    class="create-offer-page-section__row"
                                >
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">{{ filter.name }}</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <template v-if="filter.type === 'select'">
                                            <UiMultiSelect
                                                v-model="specsList[`specs[${filter.id}]`]"
                                                :options="filter.options"
                                                :searchable="false"
                                                placeholder="Выбрать"
                                                trackBy="id"
                                                label="value"
                                                class="create-offer-page-section__selector"
                                            />
                                        </template>
                                        <template v-else-if="filter.type === 'date'">
                                            <UiDatePicker v-model="specsList[`specs[${filter.id}]`]" class="create-offer-field__input"/>
                                        </template>
                                        <template v-else>
                                            <UiInput
                                                v-model="specsList[`specs[${filter.id}]`]"
                                                :placeholder="`Введите ${filter.name}`"
                                                class="create-offer-field__input"
                                            />
                                        </template>
                                    </label>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div class="create-offer-page__buttons">
                        <UiButton
                            @click.prevent="resetForm"
                            type="reset"
                            theme="gray"
                            class="create-offer-page__button"
                        >
                            Отмена
                        </UiButton>
                        <UiButton
                            @click.prevent="sendForm"
                            type="submit"
                            class="create-offer-page__button"
                        >
                            Создать предложение
                        </UiButton>
                    </div>
                </form>
            </main>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";
import {useRegions} from "~/composable/request/useRegions";
import {useCategoriesStore} from "~/store/useCategoriesStore";
import ButtonLink from "~/components/Ui/ButtonLink.vue";
import {Category} from "~/definitions/interfaces/Categories";
import {addOffer} from "~/api/ProductsApi";

useHead({
    title: 'Личный кабинет',
});

definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
});
const {regions, getRegions} = useRegions();
const categoriesStore = useCategoriesStore()
const userToken = useCookie('userToken');

const isOpenBase: Ref<boolean> = ref(false);
const isOpenCharacteristics: Ref<boolean> = ref(false);
const category_id = ref<Category | null>();
const region_id = ref();
const name = ref('');
const description = ref('');
const price = ref('');
const address = ref('');
const specsList = ref({});
const formData = new FormData();

const handleToogleBase = () => {
    isOpenBase.value = !isOpenBase.value;
}
const handleToogleCharacteristics = () => {
    isOpenCharacteristics.value = !isOpenCharacteristics.value;
}

const iconAccordionBase = computed(() => unref(isOpenBase) ? 'minus' : 'plus');
const iconAccordionisOpenCharacteristics = computed(() => unref(isOpenCharacteristics) ? 'minus' : 'plus');

const selectCategoryId = computed(() => unref(category_id)?.id);
const selectCategory = computed(() => unref(categoriesStore).categories.find(category => category.id === unref(selectCategoryId)))
const filtersCategory = computed(() => unref(selectCategory)?.filters || []);
const saveFiles = (files: File[]) => {
    files.forEach((file, indexFile: number) => {
        formData.append(`images[${indexFile}]`, file);
    })
};
function onDrop(acceptFiles: File[]) {
    saveFiles(acceptFiles);
}

const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({ onDrop, maxFiles: 50, multiple: true, noClick: true });
const resetForm = () => {
    category_id.value = null;
    region_id.value = null;
    name.value = '';
    description.value = '';
    price.value = '';
    address.value = '';
    specsList.value = {};
}
const sendForm = () => {
    const formData = new FormData();

    if(unref(selectCategoryId)) {
        formData.append('category_id', unref(selectCategoryId).toString());
    }
    if(unref(region_id)?.id) {
        formData.append('region_id', unref(region_id)?.id);
    }
    formData.append('name', unref(name));
    formData.append('description', unref(description));
    formData.append('price', unref(price));
    formData.append('address', unref(address));
    // formData.append('specsList', JSON.stringify(unref(specsList)));

    addOffer(formData, unref(userToken));
}

await getRegions();
</script>

<style scoped lang="scss">
@import '~/pages/office/styles/create-offer-page.scss';
</style>
