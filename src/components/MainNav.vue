<template>
    <TabMenu :model="items">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
    </TabMenu>
</template>
<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';
import TabMenu from 'primevue/tabmenu';
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
                    label: 'ADMINISTRACIÓN',
                    icon: 'pi pi-briefcase',
                    command: () => {
                        router.push('/admin');
                    }
                });
                items.value.push({
                    label: 'DATOS',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        router.push('/datos');
                    }
                });
            }

            if (tkBearer.role[i] === 'user') {
                items.value.push({
                    label: 'AREA CLIENTE',
                    icon: 'pi pi-briefcase',
                    command: () => {
                        router.push('/areaCliente');
                    }
                });
            }
        }
        items.value.push({
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
            label: 'ACCEDER',
            icon: 'pi pi-sign-in',
            command: () => {
                router.push('/login');
            }
        });
    }
});

const items = ref([
    {
        label: 'INICIO',
        icon: 'pi pi-home',
        command: () => {
            router.push('/index');
        }
    },
    {
        label: 'ACCEDER',
        icon: 'pi pi-sign-in',
        command: () => {
            router.push('/login');
        }
    }
]);

</script>
<style scoped lang="scss">
* {
    font-family: "Arial Narrow", serif;
}

.sticky {
    position: sticky;
    top: 0;
    z-index: 10;
}

.p-tabmenu .p-tabmenu-nav {
    border: 1px solid orange;
    border-width: 0 0 3px 0;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    letter-spacing: 3px;
    color: #6c757d;
    font-size: 11px;
    border-width: 0 0 3px 0;
    border-color: orange;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    letter-spacing: 3px;
    color: #6c757d;
    border-width: 0 0 3px 0;
    font-size: 11px;
}
</style>