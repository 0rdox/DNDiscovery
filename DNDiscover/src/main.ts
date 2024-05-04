import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//Create App
const app = createApp(App).use(router).mount('#app')
