import { createApp } from 'vue'
import App from './App.vue'

import store from './store'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'


import axios from 'axios'

import router from './router'
import "@/style/app.css" 

import i18n from "./locales/i18n"

// i18n.global.locale = store.state.language

store.dispatch('auth/me').then(() => { createApp(App).use(store).use(router).use(i18n).mount('#app') })

