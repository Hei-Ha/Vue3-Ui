import './lib.scss'
import './index.scss'
import 'github-markdown-css'

import { createApp } from 'vue'
import router from './router'
import ElementUIPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.use(ElementUIPlus)
app.mount('#app')
