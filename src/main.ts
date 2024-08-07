import 'github-markdown-css'

import { createApp } from 'vue'
import router from './router'
import ElementUIPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style/index.css'


const app = createApp(App)
app.use(router)
app.use(ElementUIPlus)
app.mount('#app')
