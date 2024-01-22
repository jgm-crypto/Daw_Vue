<template>
    <div class="card flex align-items-center justify-content-start p-5 login">
        <Card style="width: 20em">
            <template #title>
                <p class="m-0 text-left">
                    Acceso al Área de Cliente
                </p>
            </template>
            <template #subtitle>
                <p class="m-0 text-left"> Inicia sesión en tu cuenta:
                </p>
            </template>
            <template #content>
                <form @submit.prevent="login">
                    <div class="card flex flex-column gap-3 p-3">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="username" placeholder="E-mail" required />
                        </InputGroup>

                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-unlock"></i>
                            </InputGroupAddon>
                            <Password v-model="password" placeholder="password" required />
                        </InputGroup>
                    </div>
                    <div>
                        <input type="submit" class="w-10 text-left" label="Accede a tu área de cliente">
                        <p @click="registrar" class="my-4 font-bold" style="cursor: pointer;">
                            Crea una cuenta
                        </p>
                    </div>
                </form>
            </template>
            <template #footer>

            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Card from 'primevue/card';
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import DataFetch from '@/servicios/dataFetch';

const router = useRouter();
const servicio = new DataFetch();
const datos = reactive({
    username: '',
    password: ''
})

// Desestructura las referencias para usar en la plantilla
const { username, password } = toRefs(datos);

const login = (async () => {
    let checkLogin = await servicio.iniciarSesion(datos);
    if (checkLogin) {
        router.push('/index');
    }
})

const registrar = (() => {
    router.push('/registro');
})

</script>
<style scoped lang="scss">
.p-card {
    color: rgb(79, 79, 184);
    font-family: 'Times New Roman', Times, serif;
}

.login {
    height: 600px;
    background-image: url('@/assets/img/php1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

input[type="submit"] {
    color: white;
    background-color: rgb(59, 59, 161);
    border: none;
    border-radius: 6px;
    padding: 5px;
    cursor: pointer;
    width: 70%;
    text-align: center;
}
</style>