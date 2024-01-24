<template>
    <div>
        <nav class="sticky flex align-content-center flex-wrap h-5rem mb-5">
            <ul class="flex align-content-center flex-wrap m-0 h-full">
                <li v-for="(item, index) in items" :key="index" :class="{ 'active-class': activeItem === item.id }"
                    class="item flex align-content-center flex-wrap px-3 mx-3 h-full">
                    <a href="#" @click="item.command">
                        <i :class="item.icon"></i> {{ item.label }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';

const tkBearer = useAuthStore();
const router = useRouter();

// Supongamos que tkBearer es un ref que puede cambiar y queremos reaccionar a esos cambios.
watch(() => tkBearer.token, (param) => {
    if (param != '') {
        items.value.pop();//Elimino el ultimo enlace 'ACCEDER'
        //Dependiendo del Rol pinto los enlaces
        for (let i = 0; i < tkBearer.role.length; i++) {
            if (tkBearer.role[i] === 'admin') {
                items.value.push({
                    id: 'admin',
                    label: 'ADMINISTRACIÓN',
                    icon: 'pi pi-briefcase',
                    command: () => {
                        router.push('/admin');
                        setActiveItem('admin');
                    }
                });
                items.value.push({
                    id: 'datos',
                    label: 'DATOS',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        router.push('/datos');
                        setActiveItem('datos');
                    }
                });
            }

            if (tkBearer.role[i] === 'user') {
                items.value.push({
                    id: 'areaCliente',
                    label: 'AREA CLIENTE',
                    icon: 'pi pi-briefcase',
                    command: () => {
                        router.push('/areaCliente');
                        setActiveItem('areaCliente');
                    }
                });
            }
        }
        items.value.push({
            id: 'login',
            label: 'CERRAR SESIÓN',
            icon: 'pi pi-briefcase',
            command: () => {
                tkBearer.logout();
            }
        });
    } else {
        items.value.splice(1);
        //Redirijo a Inicio
        router.push('/index');
        items.value.push({
            id: 'login',
            label: 'ACCEDER',
            icon: 'pi pi-sign-in',
            command: () => {
                router.push('/login');
                setActiveItem('login');
            }
        });
    }
});

const items = ref([
    {
        id: 'inicio',
        label: 'INICIO',
        icon: 'pi pi-home',
        command: () => {
            router.push('/index');
            setActiveItem('inicio');
        },
        linkActivo: 'activo'
    },
    {
        id: 'login',
        label: 'ACCEDER',
        icon: 'pi pi-sign-in',
        command: () => {
            router.push('/login');
            setActiveItem('login');
        }
    }
]);

const activeItem = ref('');

const setActiveItem = (item: string) => {
    activeItem.value = item;
};


</script>
<style scoped lang="scss">
* {
    font-family: "Arial Narrow", serif;
}

ul,
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

li {
    position: relative;
    /* Relativo para posicionar el pseudo-elemento */
    z-index: 1;
}

li::after {
    content: '';
    position: absolute;
    bottom: -2px;
    top: -1px;
    /* Para superponer el borde del div padre */
    right: -1px;
    left: -1px;
    border-bottom: 2px solid transparent;
    /* El borde del pseudo-elemento */
    z-index: -1;
    transition: border-color 0.3s;
}

li:hover::after {
    color: orange;
    border-color: orange;
}

li.active-class::after {
    border-color: orange;
    /* El color cuando el li es el activo */
}

.item {
    letter-spacing: 3px;
}

.activo {
    border-bottom: 2px solid orange;
}

.sticky {
    border-bottom: 2px solid black;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 10;
}
</style>