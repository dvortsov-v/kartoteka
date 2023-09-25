import {typesSortInModal} from '~/constants/typesSortInModal';
import {useModal} from 'vue-final-modal';
import {ModalsCatalogSort} from '#components';

export const useModalCatalogSort = () => {
    const textSortType = ref(typesSortInModal[0].value);

    const modalCatalogSort = useModal({
        component: ModalsCatalogSort,
        attrs: {
            onClose() {
                modalCatalogSort.close();
            },
            onUpdateSort(value: string) {
                toogleTextSortType(value);
                modalCatalogSort.close();
            },
        },
    })

    const toogleTextSortType = (newValue: string) => {
        textSortType.value = newValue;
    }

    const findSelectTypeSorting = computed(() => {
        return typesSortInModal.find(itemSort => itemSort.value === unref(textSortType))?.text
    });

    return {
        modalCatalogSort,
        findSelectTypeSorting,
    }
}
