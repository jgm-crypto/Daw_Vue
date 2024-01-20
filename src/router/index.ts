import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import DatosView from "@/views/DatosView.vue";
import AdminView from "@/views/AdminView.vue";
import MainView from "@/views/MainView.vue";
import CrudNeumaticosView from "@/views/CrudNeumaticosView.vue";
import WelcomeViewVue from "@/views/WelcomeView.vue";
import ResultBuscarViewVue from "@/views/ResultBuscarView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";
import AltaUserView from "@/views/AltaUserView.vue";
import AreaClienteView from "@/views/AreaClienteView.vue";
import { useAuthStore } from "@/store/auth";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: to => {
            return { name: 'welcome' }
        }
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: WelcomeViewVue
    },
    {
        path: '/index',
        redirect: '/index/main',
        component: MainLayout,
        children: [
            {
                path: 'main',
                name: 'main',
                component: MainView
            },
            {
                path: '/datos',
                name: 'datos',
                component: DatosView,
                meta: { requiresAuth: true }
            },
            {
                path: '/buscar/:campo/:valor',
                name: 'buscar',
                component: ResultBuscarViewVue,
                props: true
            },
            {
                path: '/admin',
                name: 'admin',
                component: AdminView,
                meta: { requiresAuth: true },
                children: [
                    {
                        path: 'neumaticos',
                        name: 'Neumaticos',
                        component: CrudNeumaticosView
                    }
                ]
            },
            {
                path: '/login',
                name: 'login',
                component: LoginViewVue,
                props: true
            },
            {
                path: '/registro',
                name: 'registro',
                component: AltaUserView
            },
            {
                path: '/areaCliente',
                name: 'areaCliente',
                component: AreaClienteView
            },
            {
                path: '/logout',
                name: 'logout',
                component: LogoutView
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// Guardián de ruta global para verificar la autenticación
router.beforeEach((to, from, next) => {
    // Aquí es donde verificarías el estado de autenticación del usuario
    // tkBearer es tu token de autenticación, aquí asumimos que es accesible en este contexto
    const tkBearer = useAuthStore();

    // Verificar si la ruta requiere autenticación
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Si el usuario no está autenticado, redirigir al login
        if (!tkBearer.token) {
            next({ path: '/index' });
        } else {
            // Si el usuario está autenticado, permitir el acceso a la ruta
            next();
        }
    } else {
        // Si la ruta no requiere autenticación, siempre permitir el acceso
        next();
    }
});

export default router
