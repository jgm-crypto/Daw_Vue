<template>
    <div class="card flex flex-column align-items-center">


        <div
            class="flex lg:justify-content-evenly lg:w-full lg:flex-row lg:align-content-center lg:my-6 flex-column justify-content-around w-6 welcome-nav">
            <v-button label="Symfony / Vue 3 Composition API" severity="info" raised @click="navigate" />
            <v-button label="JavaScript / PHP" severity="info" text raised @click="navigate" />
            <v-button label="Java / Spring" severity="info" text raised @click="navigate" />
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
    </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const info = ref(false);

const navigate = (() => {
    router.push('/index');
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

.p-image {
    height: 300px;
    width: 300px;
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