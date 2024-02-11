<template>
  <table class="w-full text-left text-sm leading-normal rtl:text-right" cellspacing="0">
    <thead class="bg-indigo-500 text-gray-50">
      <tr>
        <th scope="col" class="border border-indigo-500 px-6 py-3">ID</th>
        <th scope="col" class="border border-indigo-500 px-6 py-3">Nombre</th>
        <th scope="col" class="border border-indigo-500 px-6 py-3">Fecha</th>
        <th scope="col" class="border border-indigo-500 px-6 py-3">Resultado</th>
      </tr>
    </thead>
    <tbody v-if="records.length">
      <tr
        v-for="(record, i) in records"
        :key="record.id"
        class="border-b border-midnight-800/50 bg-white last:border-b-0 dark:bg-midnight-900/20"
      >
        <td scope="row" class="px-6 py-4">
          {{ i + 1 }}
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          {{ record.name }}
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          {{ record.date }}
        </td>
        <td class="px-6 py-4">
          {{ record.result }}
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr class="bg-white text-midnight-800/75 dark:bg-midnight-900/20 dark:text-gray-50/75">
        <td scope="row" colspan="5" class="px-6 py-4 text-center">
          No se han realizado operaciones
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useHistoryStore } from '@/stores/history'
import { toRefs } from 'vue'

const historyStore = useHistoryStore()
const { records } = toRefs(historyStore)
</script>
