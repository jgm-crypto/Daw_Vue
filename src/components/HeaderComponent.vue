<template>
    <div class="flex justify-content-around my-5 mx-auto h-30rem">

        <Card class="lg:w-5 w-full h-auto text-left" style="width: 25em">
            <template #header>
                <img src="@/assets/img/n.jpeg" alt="neumatico header" style="max-width: 100%;height: auto;">
            </template>
            <template #title> Neumaticos nuevos/ocasión </template>
            <template #content>
                <p class="m-0 background-text">
                    Amplia gama de primeras marcas.
                </p>
                <p class="m-0 background-text">
                    Selecciona entre una gran variedad de marcas y calidades que mas se ajusten a tus necesidades.
                </p>
                <Divider />
                <p class="m-0 background-text">
                    Los neumaticos de ocasion disponen de 3 tipos de calidades según sus caracteristicas; Extra,
                    primera y segunda. <span class="sub">Descripción de las caracteristicas</span>.
                </p>
            </template>
        </Card>

        <Card class="lg:w-3 w-8 text-left">
            <template #title>MEDIDAS MAS VENDIDAS</template>
            <template #content>
                <div class="flex flex-column">
                    <div>185/65 15 88H</div>
                    <i class="pi pi-angle-up" style="font-size: 2rem"></i>
                    <div>205/55 16 91V</div>
                    <i class="pi pi-angle-down" style="font-size: 2rem"></i>
                    <div>215/60 16 95V</div>
                    <i class="pi pi-angle-up" style="font-size: 2rem"></i>
                    <div>195/65 15 91V</div>
                    <i class="pi pi-angle-down" style="font-size: 2rem"></i>
                </div>
            </template>
        </Card>
    </div>
</template>
  
<script setup lang="ts">
import Divider from 'primevue/divider';
import Card from 'primevue/card';
</script>

<style scoped lang="scss">
* {
    font-family: "Arial Narrow", serif;
    font-size: 13px;
    letter-spacing: 4px;
    font-weight: bold;
}

.sub {
    color: rgb(133, 133, 255);
    cursor: pointer;
}
</style>