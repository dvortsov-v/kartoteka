<template>
    <div class="take-certificate">
        <label class="take-certificate__field take-certificate-field">
            <span class="take-certificate-field__placeholder">
                <span class="take-certificate-field__text">Введите ваш логин</span>
                <svg-icon name="asterisk" class="take-certificate-field__required"/>
            </span>
            <UiInput
                v-model="login"
                required
                placeholder="Ваш логин"
                class="take-certificate-field__input"
            />
        </label>
        <div class="take-certificate__field take-certificate-field">
             <span class="take-certificate-field__placeholder">
                <span class="take-certificate-field__text">Выберите сертификат</span>
                <svg-icon name="asterisk" class="take-certificate-field__required"/>
            </span>
            <UiMultiSelect
                v-model="selectSertificate"
                :options="sertificateList"
                placeholder="Выберите сертефикат"
                label="subjectName"
                class="take-certificate-field__selector"
            />
        </div>
        <UiButton class="take-certificate__submit">
            Отправить
        </UiButton>
    </div>
</template>
<script setup lang="ts">
import { Certificate, getUserCertificates, } from 'crypto-pro';
const sertificateList = ref<Certificate[]>([])
const selectSertificate = ref<Certificate>();
const login = ref<string>('');

onMounted(() => nextTick(async ()=> {sertificateList.value = await getUserCertificates()}))

</script>
<style scoped lang="scss">
@import "@/components/Office/Profile/styles/take-certificate.scss";
</style>
