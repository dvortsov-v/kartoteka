export const getNamePage = computed(() => {
    const route = useRoute();

    return route.params.name;
})
