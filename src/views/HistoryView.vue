<template>
  <main class="container mt-[57.6px] min-h-[calc(100vh-153.6px)]">
    <section class="flex flex-col">
      <div class="mb-6 mt-10 md:mb-8">
        <h1 class="mb-4 text-3xl font-bold tracking-tight">Historial de operaciones</h1>
      </div>
      <div class="my-6 flex flex-col items-center justify-center">
        <div class="relative w-full overflow-x-auto rounded-md">
          <TableHistory />
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import TableHistory from '@/components/history/TableHistory.vue'
</script>
