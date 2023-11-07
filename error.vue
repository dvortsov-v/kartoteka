<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
    <ErrorPage class="error"></ErrorPage>
</template>
