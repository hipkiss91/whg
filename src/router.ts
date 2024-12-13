import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Register',
            component: () => import('~/pages/Register.vue'),
        },
    ],
});
