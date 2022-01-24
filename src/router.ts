import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import intro from './views/intro.vue'
import GetStart from './views/getStart.vue'
import Install from './views/install.vue'

import SwitchDoc from "./views/doc/switchDoc.vue";
import buttonDoc from './views/doc/buttonDoc.vue'
import dialogDoc from './views/doc/dialogDoc.vue'
import tabsDoc from './views/doc/tabsDoc.vue'

const history = createWebHashHistory()
const routers = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: 'intro', component: intro },
                { path: 'getStart', component: GetStart },
                { path: 'install', component: Install },
                { path: 'switch', component: SwitchDoc },
                { path: 'button', component: buttonDoc },
                { path: 'dialog', component: dialogDoc },
                { path: 'tabs', component: tabsDoc }
            ]
        }
    ]
})

export default routers