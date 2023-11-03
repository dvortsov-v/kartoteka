import {useModal} from "vue-final-modal";
import {History} from "~/definitions/interfaces/History";
import {
    ModalsAuthorization,
    ModalsCatalogSelectFilters,
    ModalsHistory,
    ModalsForgotPassword,
    ModalsRegistration,
    ModalsSuccessRegistration,
    ModalsOffer,
    ModalsConsultation,
} from "#components";

export const useModalList = () => {

    const modalCatalogFilters = (additionalAttrs?: any) => {
        const modalsCatalogSelectFilters = useModal({
            component: ModalsCatalogSelectFilters,
            attrs: {
                onClose() {
                    modalsCatalogSelectFilters.close()
                },
                ...additionalAttrs,
            },
        })

        return modalsCatalogSelectFilters;
    };

    const modalHistory = (historyList: History[], historyId: number) => {
        const modalHistory = useModal({
            component: ModalsHistory,
            attrs: {
                onClose() {
                    modalHistory.close()
                },
                historyList,
                historyId,
            },
        });

        return modalHistory
    }

    const modalAuthorization = useModal({
        component: ModalsAuthorization,
        attrs: {
            onClose() {
                modalAuthorization.close();
            },
            onOpenRegistrationModal() {
                modalAuthorization.close();
                modalRegistration.open()
            },
            onOpenForgotPasswordModal() {
                modalAuthorization.close();
                modalForgotPassword.open()
            }
        },
    })

    const modalRegistration = useModal({
        component: ModalsRegistration,
        attrs: {
            onClose() {
                modalRegistration.close();
            },
            onOpenAuthorizationModal() {
                modalAuthorization.open();
                modalRegistration.close();
            },
            onOpenSuccessRegistrationModal() {
                const {open: openModalSuccessModal} = modalSuccessModal('Вы успешно зарегистрировались', 'На email info@mail.ru отправлено письмо для подтверждения регистрации и активации вашего аккаунта');
                openModalSuccessModal();
                modalRegistration.close()
            }
        },
    })

    const modalForgotPassword = useModal({
        component: ModalsForgotPassword,
        attrs: {
            onClose() {
                modalForgotPassword.close()
            },
            onOpenForgotPasswordModal() {
                const {open: openModalSuccessModal} = modalSuccessModal('Письмо  от правлено', 'На email info@mail.ru отправлено письмо восстановления доступа к аккаунту');
                openModalSuccessModal();
                modalForgotPassword.close()
            }
        },
    })

    const modalSuccessModal = (title: string, text: string) => {
        const modalSuccessModal = useModal({
            component: ModalsSuccessRegistration,
            attrs: {
                title,
                text,
                onClose() {
                    modalSuccessModal.close()
                },
            },
        })

        return modalSuccessModal
    }

    const modalOffer = useModal({
        component: ModalsOffer,
        attrs: {
            onClose() {
                modalOffer.close()
            },
            onOpenSuccessRegistrationModal() {
                const {open: openModalSuccessModal} = modalSuccessModal('Заявка отправлена', 'На email info@mail. ru отправлено письмо для подтверждения регистрации и активации вашего аккаунта. Наш менеджер свяжется с вами в ближайшее время для подтверждения заявки.');
                openModalSuccessModal();
                modalOffer.close()
            }
        },
    })
    const modalConsultation = useModal({
        component: ModalsConsultation,
        attrs: {
            onClose() {
                modalConsultation.close()
            },
            onOpenSuccessRegistrationModal() {
                const {open: openModalSuccessModal} = modalSuccessModal('Заявка отправлена', 'На email info@mail. ru отправлено письмо для подтверждения регистрации и активации вашего аккаунта. Наш менеджер свяжется с вами в ближайшее время для подтверждения заявки.');
                openModalSuccessModal();
                modalConsultation.close()
            }
        },
    })

    return {
        modalAuthorization,
        modalRegistration,
        modalForgotPassword,
        modalCatalogFilters,
        modalHistory,
        modalOffer,
        modalConsultation,
        modalSuccessModal,
    }
}
