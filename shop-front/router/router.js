import { createRouter, createWebHashHistory } from "vue-router";
import MainComponent from "../src/components/MainComponent.vue";
import AboutComponent from "../src/components/AboutComponent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path : '/', component: MainComponent },
        { path : '/about', component: AboutComponent }
    ]
})