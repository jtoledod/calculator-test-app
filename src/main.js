import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Supports weights 100-900
import '@fontsource-variable/onest'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
