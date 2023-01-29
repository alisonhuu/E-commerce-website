import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'

const app = createApp(App)
app.config.globalProperties.$filters = { currency, date }

app.use(router)
app.use(VueAxios, axios)
app.component('LoadingCom', Loading)
app.mount('#app')
