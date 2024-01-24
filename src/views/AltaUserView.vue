<template>
    <div class="card flex align-items-center justify-content-center w-full py-5 my-5 box">
        <Card style="width: 40em" class="form">
            <template #title>
                <p class="m-0 text-white font-bold">
                    Crea una cuenta
                </p>
            </template>
            <template #subtitle>
                <p class="m-0 text-white font-bold"> Introduce tus datos:
                </p>
                <Divider type="solid" />
            </template>
            <template #content>
                <form @submit.prevent="AltaUsuario">
                    <div class="card flex flex-column m-auto w-5 gap-3">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="dni" placeholder="DNI" required />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="nombre" placeholder="Nombre" required />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="apellido" placeholder="Apellido" required />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="tlf" placeholder="Telefono" required />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="email" placeholder="E-mail" required />
                        </InputGroup>

                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-unlock"></i>
                            </InputGroupAddon>
                            <Password v-model="password" placeholder="password" required />
                        </InputGroup>
                    </div>
                    <div class="flex align-items-center my-5 text-left">
                        <TriStateCheckbox v-model="check" required />
                        <p class="mx-3 text-white font-bold">Otorgo mi consentimiento expreso para el tratamiento de mis
                            datos
                            según lo recogido en la
                            Política de
                            Privacidad, y acepto las Normas de Uso</p>
                    </div>
                    <Divider type="solid" />
                    <input type="submit" class="text-center font-bold w-4 p-3" value="ENVIAR" />
                </form>
            </template>
            <template #footer>
                <div>
                    <p class="text-white font-bold">¿Ya tienes una cuenta?</p>
                    <p class="text-white font-bold" style="cursor: pointer;" @click="login">Accede a tu cuenta.</p>
                </div>
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
import Divider from 'primevue/divider';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Card from 'primevue/card';
import { toRefs, ref } from 'vue';
import { reactive } from 'vue';
import DataFetch from '@/servicios/dataFetch';
import { useRouter } from 'vue-router';

const router = useRouter();
const service = new DataFetch();
const insert = ref(false);
const check = ref(false);
const datos = reactive({
    dni: '',
    nombre: '',
    apellido: '',
    tlf: '',
    email: '',
    password: ''
})

// Desestructura las referencias para usar en la plantilla
const { dni, nombre, apellido, tlf, email, password } = toRefs(datos);

const login = (() => {
    router.push('/login');
})

const AltaUsuario = (async () => {
    insert.value = await service.insertCliente(datos);
    if (insert.value) {
        router.push('/login');
    }
})

</script>
<style scoped lang="scss">
.box {
    background-image: url('@/assets/img/n3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.form {
    background-color: rgba(0, 0, 0, 0.5);
    /* Cambia 0.5 a tu valor de opacidad deseado */
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