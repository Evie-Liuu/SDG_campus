import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/sdgs', name: 'SDGs', component: () => import("@/views/SDGs.vue") },
]

const router = createRouter({
    history: createWebHistory('/SDG_campus/'),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }
        return { top: 0 }
    }
})

export default router