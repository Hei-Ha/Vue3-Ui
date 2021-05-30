import {createRouter, createWebHashHistory} from "vue-router";

import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDoc from "./components/switchDoc.vue";

const history = createWebHashHistory()
const routers = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: 'switch', component: SwitchDoc }
            ]
        }
    ]
})

export default routers