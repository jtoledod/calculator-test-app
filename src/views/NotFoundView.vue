<template>
  <main
    class="item-center container mt-[57.6px] flex min-h-[calc(100vh-153.6px)] flex-col justify-center text-center"
  >
    <h1 class="mb-4 text-3xl font-bold tracking-tight">Página no encontrada</h1>
    <RouterLink :to="{ name: 'home' }" class="text-md hover:text-indigo-500"
      >Volver al inicio</RouterLink
    >
  </main>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
