import {createRouter, createWebHashHistory} from "vue-router";

import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDoc from "./components/switchDoc.vue";
import buttonDoc from './components/buttonDoc.vue'
import dialogDoc from './components/dialogDoc.vue'
import tabsDoc from './components/tabsDoc.vue'
import DocPage from './components/docPage.vue'

const history = createWebHashHistory()
const routers = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: '', component: DocPage },
                { path: 'switch', component: SwitchDoc },
                { path: 'button', component: buttonDoc },
                { path: 'dialog', component: dialogDoc },
                { path: 'tabs', component: tabsDoc }
            ]
        }
    ]
})

export default routers