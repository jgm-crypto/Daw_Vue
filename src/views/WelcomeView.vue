<template>
    <div class="card flex flex-column align-items-center">


        <div
            class="flex lg:justify-content-evenly lg:w-full lg:flex-row lg:align-content-center lg:my-6 flex-column justify-content-around w-6 welcome-nav">

            <Card style="width: 25em">
                <template #header>
                    <img alt="user header" src="../assets/img/vue.png" class="imgCard" />
                </template>
                <template #title> Tecnologías </template>
                <template #subtitle> Symfony / Vue 3 Composition API /TypeScript / JavaScript </template>
                <template #content>
                    <p class="m-0">
                        Una tienda para visualizar neumaticos y solicitar presupuestos, tiene sección de administración
                        y un área de clientes.
                    </p>
                </template>
                <template #footer>
                    <v-button label="Acceder" severity="info" raised @click="navigate('index')" />
                </template>
            </Card>

            <Card style="width: 25em">
                <template #header>
                    <img alt="user header" src="../assets/img/php.jpg" class="imgCard" />
                </template>
                <template #title> Tecnologías </template>
                <template #subtitle> JavaScript / PHP / HTML / CSS </template>
                <template #content>
                    <p class="m-0">
                        Desarrollada sin ningún framewrok.
                        Pagina web con secciones; login, proyectos, contacto y presupuestos.
                    </p>
                </template>
                <template #footer>
                    <v-button label="Acceder" severity="info" raised @click="navigate('php')" />
                </template>
            </Card>

            <v-button label="Java / Spring" severity="info" text raised @click="navigate('java')" />
        </div>

        <div class="rect">
            <Transition name="info">
                <div v-show="info"
                    class="flex lg:justify-content-evenly lg:align-items-center lg:flex-row lg:my-4 flex-column my-2">
                    <div class="flex flex-column lg:w-3 w-full p-2">
                        <h1 class="m-0 mb-3">FRONT-END</h1>
                        <p class="m-0">
                            Amplia experiencia en HTML5, CSS3/SASS y
                            JavaScript. Desarrollo de interfaces web
                            responsive utilizando frameworks modernos
                            como Vue.js
                        </p>
                    </div>
                    <Divider layout="horizontal" class="flex lg:hidden w-5 mx-auto" />
                    <Divider layout="vertical" class="hidden lg:flex" />
                    <div class="flex flex-column lg:w-3 w-full p-2">
                        <h1 class="m-0 mb-3">BACK-END</h1>
                        <p class="m-0">
                            Desarrollo de aplicaciones robustas en PHP
                            con Symfony, con un enfoque en la eficiencia y
                            la seguridad. Profundo conocimiento de SQL y
                            bases de datos MySQL.
                        </p>
                    </div>
                    <Divider layout="horizontal" class="flex lg:hidden w-5 mx-auto" />
                    <Divider layout="vertical" class="hidden lg:flex" />
                    <div class="flex flex-column lg:w-3 w-full p-2">
                        <h1 class="m-0 mb-3">SERVIDORES</h1>
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti
                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique
                            sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                            expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                            minus.
                        </p>
                    </div>
                </div>
            </Transition>
        </div>

        <Card style="width: 40em">
            <template #header>
                <img alt="user header" src="../assets/img/node.png" class="imgCard" />
            </template>
            <template #title> Configuración Apache </template>
            <template #content>
                <p class="m-0">
                    Para poder ejecutar diferentes proyectos desde Apache, se deben crear diferentes archivos de
                    configuración para cada host, por ejemplo:<br>
                    <b>sudo nano /etc/apache2/sites-available/nombre_proyecto.conf</b>, y despues se configuraria asignando
                    un
                    nombre para el host.
                <pre>
                        &lt;VirtualHost *:80&gt;
                            ServerName daw_php
                            DocumentRoot /var/www/daw_php

                            &lt;Directory /var/www/daw_php&gt;
                                Options -Indexes +FollowSymLinks
                                AllowOverride All
                                Require all granted
                            &lt;/Directory&gt;

                            ErrorLog ${APACHE_LOG_DIR}/proyecto1_error.log
                            CustomLog ${APACHE_LOG_DIR}/proyecto1_access.log combined
                        &lt;/VirtualHost&gt;
                    </pre>
                Posteriormente se debe configurar el archivo '<b>host</b>' de la maquina local en la ruta
                <b>C/Windows/System32/drivers/etc</b> y agregar el host con su IP correspondiente,
                en este caso, la IP de la maquina local y el ServerName asignado.
                </p>
            </template>
            <template #footer>
            </template>
        </Card>

    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const info = ref(false);

const navigate = ((index: string) => {
    if (index === 'php') {
        window.location.href = 'http://daw_php/';
    } else {
        router.push(`/${index}`);
    }
})

onMounted(() => {
    info.value = true;
})

</script>

<style scoped lang="scss">
* {
    font-family: "Arial Narrow", serif;
    font-size: 13px;
}

.imgCard {
    width: 100%;
    height: 200px;
}

h1,
p {
    text-align: start;
}

.rect {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    color: var(--primary-color-text);
}

.info-enter-active,
.info-leave-active {
    transition: all 1.5s ease;
}

.info-enter-from,
.info-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

@media (max-width: 375px) {

    .welcome-nav {
        height: 200px;
    }
}
</style>