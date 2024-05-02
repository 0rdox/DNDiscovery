import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'	
import router from './router'


//Create App
const app = createApp(App)

app.use(router)

app.mount('#app')
