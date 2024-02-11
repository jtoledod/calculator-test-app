<template>
  <div>
    <form @submit.prevent="handleSubmit" method="POST">
      <div class="w-full">
        <InputText
          v-model="form.name"
          :errors="errors['name']"
          name="name"
          placeholder="Ingresa tu nombre"
        ></InputText>
      </div>
      <div class="mb-8 w-full gap-3 md:flex md:flex-row">
        <InputText
          v-model="form.operators[0]"
          :errors="errors['operators[0]']"
          name="operators[0]"
          placeholder="Primer operando"
        ></InputText>
        <InputText
          v-model="form.operators[1]"
          :errors="errors['operators[1]']"
          name="operators[1]"
          placeholder="Segundo operado"
        ></InputText>
        <InputText
          v-model="form.operators[2]"
          :errors="errors['operators[2]']"
          name="operators[2]"
          placeholder="Tercer operando"
        ></InputText>
      </div>
      <div class="flex justify-center gap-5">
        <button
          @click="clearAll"
          class="text-md flex h-12 w-full items-center justify-center rounded-md border border-indigo-600 p-3 text-indigo-500 transition duration-200 ease-in-out hover:bg-indigo-500/20 md:w-60 dark:border"
          type="button"
        >
          Limpiar
        </button>
        <button
          class="text-md flex h-12 w-full items-center justify-center rounded-md bg-indigo-600 p-3 text-gray-50 hover:bg-indigo-500 md:w-60"
          type="submit"
        >
          Calcular
        </button>
      </div>
    </form>
    <div class="flex flex-col items-center justify-center py-6" v-if="result">
      <div
        class="text-md relative mb-3 flex w-full flex-col items-center justify-center gap-3 overflow-x-auto p-4 text-center text-lg"
      >
        <p>El resultado de tu operación es</p>
        <p class="text-xl font-bold text-indigo-600">{{ result }}</p>
      </div>
      <div
        class="flex flex-col items-center text-center text-sm text-midnight-800/80 dark:text-gray-50/75"
        v-if="previousRecords.length"
      >
        <p class="mb-3">Esta operación ha sido realizada previamente por:</p>
        <table class="">
          <tbody>
            <tr v-for="record in previousRecords" :key="record.id">
              <td class="px-3 py-2">{{ record.name }}</td>
              <td class="px-3 py-2">{{ record.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from '@/components/ui/InputText.vue'
import { required, min, max, onlyLetters } from '@/validators'
import { reactive, ref } from 'vue'
import { useHistoryStore } from '@/stores/history'

const historyStore = useHistoryStore()

let form = reactive({
  name: '',
  operators: ['', '', '']
})

let errors = reactive({})
let result = ref()
let previousRecords = reactive([])

const calculate = (data) => {
  let allFieldsNumber = true
  let tempResult = null

  data.operators.forEach((operator) => {
    if (isNaN(operator)) return (allFieldsNumber = false)
  })

  if (allFieldsNumber) {
    tempResult = data.operators.reduce((prev, curr) => {
      return prev + Number(curr)
    }, 0)
  } else {
    tempResult = data.operators.join(' ')
  }

  result.value = tempResult

  const { id } = historyStore.addRecord({
    name: data.name,
    operators: [...data.operators],
    result: tempResult
  })

  previousRecords = historyStore.findRecords({
    currentId: id,
    operators: [...data.operators]
  })
}

const handleSubmit = (e) => {
  clearResults()

  const formData = Object.fromEntries(new FormData(e.target))

  Object.keys(formData).forEach((key) => {
    const value = formData[key]

    if (key == 'name') {
      const fieldErrors = [required(value), min(value, 2), max(value, 30), onlyLetters(value)]
      errors[key] = fieldErrors.filter((error) => error !== false)
    }

    if (['operators[0]', 'operators[1]'].includes(key)) {
      const fieldErrors = [required(value), max(value, 30)]
      errors[key] = fieldErrors.filter((error) => error !== false)
    }

    if (key === 'operators[2]' && value && !!value.trim()) {
      const fieldErrors = [max(value, 30)]
      errors[key] = fieldErrors.filter((error) => error !== false)
    }
  })

  let formHasErrors = false

  Object.keys(errors).forEach((key) => {
    if (errors[key].length > 0) return (formHasErrors = true)
  })

  if (!formHasErrors) {
    const data = {
      name: form.name,
      operators: [...form.operators]
    }
    clearForm()
    calculate(data)
  }
}

const clearAll = () => {
  clearForm()
  clearResults()
}

const clearResults = () => {
  result.value = null
  previousRecords = []
}

const clearForm = () => {
  form.name = ''
  form.operators = ['', '', '']
  errors = reactive({})
}
</script>
