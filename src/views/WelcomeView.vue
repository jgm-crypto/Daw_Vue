<template>
    <div class="flex justify-content-center surface-900 text-50"
        style="border-top: 20px solid var(--primary-600);min-height: 200px;">
        <div class="grid w-10 m-0">
            <div class="col-6 flex flex-wrap align-content-center justify-content-start">
                <h1 class="figtree m-0">JGM</h1>
                <div class="flex flex-wrap align-items-end">
                    <h1 class="m-0 orbitron pb-2 pl-3"><span class="text-yellow-400 narrow text-2xl">(</span>FullStack
                        Developer:<span class="text-teal-500">string</span><span
                            class="text-yellow-400 narrow text-2xl">)</span></h1>
                </div>
            </div>

            <div class="col-5 flex flex-wrap align-items-center justify-content-start">
                <p class="mx-2 text-500">Sobre mí</p>
                <p class="m-2 text-500">Habilidades</p>
                <p class="m-2 text-500">Proyectos</p>
                <p class="m-2 text-500">Documentación</p>
                <p class="m-2 text-500">Contacto</p>
            </div>

            <div class="col-1 flex flex-wrap align-content-center justify-content-around">
                <a href="#" @click="navigate('linkedin')">
                    <i class="pi pi-linkedin" style="font-size: 1.5rem;color: var(--primary-600)"></i>
                </a>
                <a href="#" @click="navigate('github')">
                    <i class="pi pi-github" style="font-size: 1.5rem;color: var(--primary-600)"></i>
                </a>
            </div>
        </div>
    </div>

    <TecnoComponent />

    <div class="card flex flex-column align-items-center">
        <div class="rect">
            <Transition name="info">
                <div v-show="info"
                    class="flex lg:justify-content-evenly lg:align-items-start lg:flex-row lg:my-4 flex-column my-2">
                    <div class="flex flex-column lg:w-3 w-full p-2">
                        <h1 class="m-0 mb-3">FRONT-END</h1>
                        <p class="m-0 text-left">
                            Amplia experiencia en HTML5, CSS3/SASS y
                            JavaScript. Desarrollo de interfaces web
                            responsive utilizando frameworks modernos
                            como Vue.js
                        </p>
                    </div>
                    <Divider layout="horizontal" class="flex lg:hidden w-5 mx-auto" />
                    <Divider layout="vertical" class="hidden lg:flex h-8rem my-auto" />
                    <div class="flex flex-column lg:w-3 w-full p-2">
                        <h1 class="m-0 mb-3">BACK-END</h1>
                        <p class="m-0 text-left">
                            Desarrollo de aplicaciones robustas en PHP
                            con Symfony, con un enfoque en la eficiencia y
                            la seguridad. Profundo conocimiento de SQL y
                            bases de datos MySQL.
                        </p>
                    </div>
                    <Divider layout="horizontal" class="flex lg:hidden w-5 mx-auto" />
                    <Divider layout="vertical" class="hidden lg:flex h-8rem my-auto" />
                    <div class="flex flex-column lg:w-3 w-full p-2">
                        <h1 class="m-0 mb-3">SERVIDORES</h1>
                        <p class="m-0 text-left">
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

            <div class="flex justify-content-center surface-900 text-50 mt-8">
                <h1 class="m-0 p-0 figtree">PROYECTOS</h1>
            </div>

            <div class="flex lg:flex-row lg:my-6 md:justify-content-center md:justify-content-
                 flex-column align-content-center flex-wrap w-10 m-auto welcome-nav">
                <div class="xl:w-3 lg:w-4 md:w-7 sm:w-9 w-full my-3 m-auto">
                    <Card style="height: 100%;">
                        <template #header>
                            <div class="w-10 m-auto p-4 border-round-md">
                                <img alt="user header" src="../assets/img/vue.png" class="imgCard border-round-md" />
                            </div>
                        </template>
                        <template #title> Tecnologías </template>
                        <template #subtitle> Symfony / Vue 3 Composition API /TypeScript / JavaScript </template>
                        <template #content>
                            <p class="m-0 text-left sans">
                                Una tienda para visualizar neumaticos y solicitar presupuestos, tiene sección de
                                administración
                                y un área de clientes.
                            </p>
                        </template>
                        <template #footer>
                            <v-button label="Acceder" severity="info" raised @click="navigate('index')" />
                        </template>
                    </Card>
                </div>
                <div class="xl:w-3 lg:w-4 md:w-7 sm:w-9 w-full my-3 m-auto">
                    <Card style="height: 100%;">
                        <template #header>
                            <div class="w-10 m-auto p-4 border-round-md">
                                <img alt="user header" src="../assets/img/php.jpg" class="imgCard border-round-md" />
                            </div>
                        </template>
                        <template #title> Tecnologías </template>
                        <template #subtitle> JavaScript / PHP / HTML / CSS </template>
                        <template #content>
                            <p class="m-0 text-left sans">
                                Desarrollada sin ningún framewrok.
                                Pagina web con secciones; login, proyectos, contacto y presupuestos.
                            </p>
                        </template>
                        <template #footer>
                            <v-button label="Acceder" severity="info" raised @click="navigate('php')" />
                        </template>
                    </Card>
                </div>
                <div class="xl:w-3 lg:w-4 md:w-7 sm:w-9 w-full my-3 m-auto">
                    <Card style="height: 100%;">
                        <template #header>
                            <div class="w-10 m-auto p-4 border-round-md">
                                <img alt="user header" src="../assets/img/Java.jpg" class="imgCard border-round-md" />
                            </div>
                        </template>
                        <template #title> Tecnologías </template>
                        <template #subtitle> Java </template>
                        <template #content>
                            <p class="m-0 text-left sans">
                                Desarrollada sin ningún framework.
                                Pagina web con secciones; login, proyectos, contacto y presupuestos.
                            </p>
                        </template>
                        <template #footer>
                            <v-button label="Acceder" severity="info" text raised @click="navigate('java')" />
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>

    <div style="height: 700px;" id="carousel" class="carousel-container my-6">
        <div class="carousel-inner h-full" :style="{ 'transform': `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, index) in imagenes" :key="index" class="carousel-item h-full"
                :style="{ 'background-image': 'url(' + image.url + ')', display: 'block' }">
            </div>
        </div>
    </div>

    <!--     <Card style="width: 40em">
        <template #title> Configuración Apache </template>
        <template #content>
            <p class="m-0 text-left">
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
    </Card> -->
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import TecnoComponent from '@/components/welcome/TecnoComponent.vue';
import { onUnmounted } from 'vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const info = ref(false);
const currentIndex = ref(0);

const imagenes = ref([
    {
        url: require('@/assets/img/fs.png')
    },
    {
        url: require('@/assets/img/node.png')
    },
    {
        url: require('@/assets/img/fs4.jpeg')
    },
]);

const navigate = ((index: string) => {
    if (index === 'php') {
        window.location.href = 'http://daw_php/';
    } else {
        router.push(`/${index}`);
    }
})

let autoSlideInterval: number | null = null;
onMounted(() => {
    info.value = true;
    autoSlideInterval = setInterval(nextImage, 3000); // Cambia cada 3 segundos
})

onUnmounted(() => {
    if (autoSlideInterval !== null) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null; // Añade esta línea
    }
});

function nextImage() {
    currentIndex.value = (currentIndex.value + 1) % imagenes.value.length;
    const slideAmount = currentIndex.value * -100;
    const innerCarousel = document.querySelector('.carousel-inner') as HTMLElement;
    if (innerCarousel) {
        innerCarousel.style.transform = `translateX(${slideAmount}%)`;
    }
}

</script>

<style scoped lang="scss">
.imgCard {
    width: 100%;
    height: 200px;
}

.carousel-container {
    position: relative;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
}

.carousel-item {
    flex: 0 0 100%;
    /* Cada .carousel-item debe ser del mismo tamaño que el contenedor del carrusel */
    width: 100%;
    min-width: 100%;
    /* Asegúrate de que cada imagen ocupe el ancho completo del contenedor */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.rect {
    background-image: linear-gradient(to bottom, var(--primary-600), var(--primary-300), white);
    color: var(--primary-color-text);
}

.proyect {
    letter-spacing: 5px;
    font-size: 70px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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