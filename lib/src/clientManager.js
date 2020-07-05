import Vue from "vue"
import App from "../src/App.vue"
import VueRouter from "vue-router"
// import router from "../../app/src/router"
import store from "./store"

export default function clientManager(router1) {
    console.log("start")
    console.log(router1)
    Vue.use(VueRouter)
    const router = new VueRouter({
        mode: 'history',
        routes: [
        { path: '/', name: 'TopPage', component: router1 },
        ]
    });
    new Vue({
        router,
        // store,
        render: h => h(App)
    }).$mount("#app")
}