import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import helloWorld from './components/HelloWorld.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: helloWorld }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
