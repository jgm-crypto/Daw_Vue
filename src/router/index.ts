import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import DatosView from "@/views/DatosView.vue";
import AdminView from "@/views/AdminView.vue";
import MainView from "@/views/MainView.vue";
import CrudNeumaticosView from "@/views/CrudNeumaticosView.vue";
import WelcomeViewVue from "@/views/WelcomeView.vue";
import ResultBuscarViewVue from "@/views/ResultBuscarView.vue";
import LoginViewVue from "@/views/LoginView.vue";
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
                meta: {
                    requiresAuth: true,
                    requiresRole: 'admin'
                }
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
                meta: {
                    requiresAuth: true,
                    requiresRole: 'admin'
                },
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
                component: AreaClienteView,
                meta: {
                    requiresAuth: true,
                    requiresRole: 'user'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


// Guardián de ruta global para verificar la autenticación
router.beforeEach((to, from, next) => {

    const tkBearer = useAuthStore();

    // Verificar si la ruta requiere autenticación
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Si el usuario no está autenticado, redirigir al login
        if (!tkBearer.token) {
            next({ path: '/index' });
        } else {
            //Validar si tiene los permisos
            if (to.meta.requiresRole) {
                for (let i = 0; i < tkBearer.role.length; i++) {
                    if (tkBearer.role[i] === to.meta.requiresRole) {
                        next();
                    }
                }
            } else {
                next({ path: '/index' });
            }
        }
    } else {
        // Si la ruta no requiere autenticación, siempre permitir el acceso
        next();
    }
});

export default router
