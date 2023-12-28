<template>
    <div class="take-certificate">
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
        <UiButton @click="confirmSerteficate" class="take-certificate__submit">
            Подтвердить
        </UiButton>
    </div>
</template>
<script setup lang="ts">
import { Certificate, getUserCertificates, createHash, createDetachedSignature} from 'crypto-pro';
import {getConfirmUserRequest} from "~/api/UserApi";
import {storeToRefs} from "pinia";
import {useUserStore} from "~/store/useUserStore";

const userToken = useCookie('userToken');
const sertificateList = ref<Certificate[]>([])
const selectSertificate = ref<Certificate>();

const {userName} = storeToRefs(useUserStore());

const confirmSerteficate = async () => {
    const hash = await createHash(unref(userName));
    console.log('hash', hash);
    const signature = await createDetachedSignature(unref(selectSertificate), hash);
    console.log('signature', signature);
    const res = await getConfirmUserRequest(unref(userToken), signature)
    console.log(res);
}

onMounted(() => nextTick(async ()=> {sertificateList.value = await getUserCertificates()}))

</script>
<style scoped lang="scss">
@import "@/components/Office/Profile/styles/take-certificate.scss";
</style>
