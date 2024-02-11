<template>
  <header
    class="fixed top-0 z-50 w-full bg-gray-50 bg-opacity-50 backdrop-blur-lg backdrop-filter dark:bg-midnight-950"
  >
    <div class="container flex justify-end py-4">
      <nav class="text-md flex flex-row items-center gap-x-8">
        <RouterLink
          :to="{ name: 'home' }"
          class="text-md font-bold transition duration-200 ease-in-out hover:text-indigo-500 active:text-indigo-500"
        >
          Inicio
        </RouterLink>
        <div class="h-4 border border-midnight-900/50"></div>
        <RouterLink
          :to="{ name: 'history' }"
          class="text-md font-bold transition duration-200 ease-in-out hover:text-indigo-500 active:text-indigo-500"
        >
          Historial
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
