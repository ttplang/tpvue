import { createApp } from 'vue'
import App from './App.vue'
import route from './routers'
import {createPinia} from "pinia"

createApp(App).use(route).use(createPinia()).mount('#app')
