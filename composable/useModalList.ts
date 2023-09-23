import {useModal} from "vue-final-modal";
import {ModalsAuthorization, ModalsForgotPassword, ModalsRegistration} from "#components";

export const useModalList = () => {

    const modalAuthorization = useModal({
        component: ModalsAuthorization,
        attrs: {
            onClose() {
                modalAuthorization.close();
            },
        },
    })

    const modalRegistration = useModal({
        component: ModalsRegistration,
        attrs: {
            onClose() {
                modalRegistration.close();
            },
        },
    })

    const modalForgotPassword = useModal({
        component: ModalsForgotPassword,
        attrs: {
            onClose() {
                modalForgotPassword.close()
            },
        },
    })

    return {
        modalAuthorization,
        modalRegistration,
        modalForgotPassword,
    }
}
