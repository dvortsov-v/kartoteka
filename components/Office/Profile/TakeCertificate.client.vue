<template>
    <div class="take-certificate">
        <h6 class="take-certificate__title">Выберите сертификат</h6>
        <UiMultiSelect
            v-model="selectSertificate"
            :options="sertificateList"
            placeholder="Выберите сертефикат"
            label="subjectName"
            class="take-certificate__selector"
        />
    </div>
</template>
<script setup lang="ts">
import { Certificate, getUserCertificates} from 'crypto-pro';
const sertificateList = ref<Certificate[]>([])
const selectSertificate = ref<Certificate>();

onMounted(() => nextTick(async ()=> {sertificateList.value = await getUserCertificates()}))

</script>
<style scoped lang="scss">
@import "@/components/Office/Profile/styles/take-certificate.scss";
</style>
