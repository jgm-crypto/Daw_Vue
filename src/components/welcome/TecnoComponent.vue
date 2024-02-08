<template>
    <div class="imgDev">
        <div class="w-11 m-auto h-full">
            <div class="grid m-0 h-full">
                <div class="col-8">
                    <div class="h-full flex flex-wrap align-content-center">
                        <Transition name="texto">
                            <div v-show="text" style="height: 80%;">
                                <div class="w-11 m-auto h-full">
                                    <Card class="flex flex-wrap btn" style="height: 100%" :pt="{ body: { class: 'p-0' } }">
                                        <template #title>
                                            <div class="flex justify-content-between surface-section border-bottom-2">
                                                <p class="m-0 p-3 uppercase orbitron text-5xl">{{ tecnologia }}</p>
                                                <i class="pi pi-times p-2" @click="reset"
                                                    style="font-size: 1.5rem;cursor: pointer;color:  var(--primary-600);"></i>
                                            </div>
                                        </template>
                                        <template #content>
                                            <div v-for="txt in tecnologias_info" :key="txt.title">
                                                <div v-if="tecnologia == txt.title">
                                                    <p class="m-0 p-2 sans text-base">
                                                        {{ txt.content }}</p>
                                                    <p class="m-0 p-2 sans text-base"><a
                                                            :href="txt.documentation">Documentación</a></p>
                                                    <div v-if="txt.title == 'javascript'">
                                                        <p class="m-0 sans text-base">BUENAS PRACTICAS</p>
                                                        <Carousel :value="reglas" :numVisible="1" :numScroll="1">
                                                            <template #item="slotProps">
                                                                <div class="border-1 surface-border border-round m-2  p-3">
                                                                    <div class="mb-3">
                                                                        <div class="relative mx-auto">
                                                                            <img :src="require('@/assets/img/js2.png') + slotProps.data.image"
                                                                                :alt="slotProps.data.name"
                                                                                class="w-full border-round" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </Carousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </Card>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>

                <div v-show="front" class="col">
                    <div class="h-full w-full flex flex-wrap justify-content-end align-content-center">
                        <div class="flex flex-wrap h-25rem flex-column justify-content-around align-content-center">
                            <Button v-for="btn in btnFront" :key="btn.value" :label="btn.label"
                                @click="setLenguaje(btn.value)" class="orbitron text-900 btn" raised outlined />
                        </div>
                    </div>
                </div>

                <div v-show="back" class="col">
                    <div class="h-full w-full flex flex-wrap justify-content-end align-content-center">
                        <div class="flex flex-wrap h-25rem flex-column justify-content-around align-content-center">
                            <Button v-for="btn in btnBack" :key="btn.value" @click="setLenguaje(btn.value)"
                                :label="btn.label" class="orbitron text-900 btn" raised outlined />
                        </div>
                    </div>
                </div>

                <div class="col h-full w-full flex flex-wrap justify-content-end align-content-center">
                    <div class="flex flex-wrap h-25rem flex-column justify-content-around align-content-center">
                        <Button @click="back = !back; text = !text; front = false; setLenguaje('back-end')" label="Back-End"
                            class="orbitron text-900 btn" raised outlined :disabled="back" />
                        <Button @click="front = !front; text = !text; back = false; setLenguaje('front-end')"
                            label="Front-End" class="orbitron text-900 btn" raised outlined :disabled="front" />
                        <Button label="Git" class="orbitron text-900 btn" @click="setLenguaje('Git')" raised outlined
                            :disabled="text" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import tecnologias_info from '@/data/tecnologias.json';
import DataFetch from '@/servicios/dataFetch';
import { onMounted, ref } from 'vue';

const text = ref(false);
const front = ref(false);
const back = ref(false);
const tecnologia = ref('');
const servicio = new DataFetch();

const reglas="";

const btnFront = [
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Librerías', value: 'librerias' },
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' }
]

const btnBack = [
    { label: 'Symfony', value: 'symfony' },
    { label: 'Node', value: 'node' },
    { label: 'PHP', value: 'php' },
    { label: 'Java', value: 'java' },
]

const setLenguaje = ((title: string) => {
    if (!text.value) {
        text.value = true;
    }
    tecnologia.value = title;
})

const reset = (() => {
    front.value = false;
    back.value = false;
    text.value = false;
})

onMounted(() => {
    tecnologias_info.forEach(async (txt) => {
        try {
            let fichero = await servicio.getFichero(txt.title);
            txt.content = fichero;
            console.log(fichero);
        } catch (error) {
            console.error("No se pudo recuperar el fichero.");
        }
    })
});


</script>
<style scoped lang="scss">
a {
    text-decoration: none;
    color: black;
    font-weight: bold;
}

.imgDev {
    height: 700px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('@/assets/img/dev2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.btn {
    background-color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
}

.p-card-body {
    padding: 20px;
}

.texto-enter-active,
.texto-leave-active {
    transition: all 1.5s ease;
}

.texto-enter-from,
.texto-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>