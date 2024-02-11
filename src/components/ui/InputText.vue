<template>
  <div class="flex w-full flex-col">
    <input
      v-model="value"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :class="[
        'text-md mb-3 block h-12 rounded-md border border-midnight-200 px-3 text-sm shadow-md transition duration-200 ease-in-out focus:border-indigo-500 focus:outline-none dark:border-midnight-900 dark:bg-midnight-950/90',
        hasErrors && 'border-red-500 dark:border-red-500'
      ]"
      v-bind="$attrs"
    />
    <span v-if="hasErrors" class="mb-3 text-sm text-red-500">{{ errors[0] }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  errors: {
    type: Array,
    default: () => []
  }
})

const value = defineModel()

const hasErrors = computed(() => {
  return props.errors.length > 0
})
</script>
