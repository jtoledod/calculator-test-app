import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', {
  state: () => ({
    records: []
  }),
  actions: {
    addRecord({ name, operators, result }) {
      const id = Date.now()

      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      let hours = date.getHours()
      let minutes = date.getMinutes()

      if (day < 10) {
        day = `0${day}`
      }

      if (month < 10) {
        month = `0${month}`
      }

      if (minutes < 10) {
        minutes = `0${minutes}`
      }

      date = `${day}/${month}/${year} ${hours}:${minutes}`

      this.records.push({
        id,
        name,
        operators,
        result,
        date
      })

      return { id }
    },
    findRecords({ currentId, operators }) {
      const result = this.records.filter((record) => {
        if (record.id == currentId) return false
        let existOperators = true
        const operatorsLen = record.operators.length

        for (let index = 0; index < operatorsLen; index++) {
          if (record.operators[index] !== operators[index]) {
            existOperators = false
            return
          }
        }

        return existOperators
      })
      return result
    }
  }
})
