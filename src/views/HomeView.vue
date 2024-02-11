<template>
  <main class="container mt-[57.6px] flex min-h-[calc(100vh-153.6px)] flex-col">
    <section class="mb-6 mt-10 md:mb-8">
      <h1 class="mb-4 text-3xl font-bold tracking-tight">🧮 Calculadora</h1>
      <p class="text-md text-justify text-midnight-800/80 dark:text-gray-50/75">
        Ingresa los números y operadores para obtener el resultado de tu cálculo.
      </p>
    </section>
    <section class="my-6">
      <FormCalculator />
    </section>
  </main>
</template>

<script setup>
import FormCalculator from '@/components/calculator/FormCalculator.vue'
</script>
