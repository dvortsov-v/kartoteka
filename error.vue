<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <h1 class="flex h-screen justify-center items-center flex-col">
    404
  </h1>
</template>
