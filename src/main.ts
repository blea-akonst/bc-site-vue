import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import {Component} from "@vue/runtime-core";
import Home from "./views/home.vue";

const routes: { path: string, component: Component }[] = [
    { path: '/', component: Home }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
