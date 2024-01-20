<template>
    <div class="flex justify-content-evenly main">
        <Card class="card">
            <template #title> Front-End </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                    repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
                    quam perferendis esse, cupiditate neque
                    quas!
                </p>
                <div class="flex justify-content-evenly">
                    <span class="dev">Vue.js Composition API</span>
                    <a href="https://www.typescriptlang.org/" class="dev">TypeScript</a>
                    <a href="https://primevue.org/" class="dev">PrimeVue</a>
                    <a href="https://primeflex.org/" class="dev">PrimeFlex</a>
                </div>
            </template>
        </Card>
        <Card class="card">
            <template #title> Back-End </template>
            <template #content>
                <p class="m-0 flex justify-content-evenly">
                    <span class="dev">Symfony</span>
                </p>
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">

import Card from 'primevue/card';

</script>
<style scoped lang="scss">
.main {
    background-color: rgba(51, 51, 87, 0.993);
    border-top: 5px solid black;
    height: 400px;
}

.card {
    margin-top: 30px;
    font-family: "Arial Narrow", serif;
    font-size: 13px;
    font-weight: bold;
    width: 40%;
    height: 200px;
    text-align: start;
}

.dev {
    text-decoration: none;
    padding: 5px;
    color: dodgerblue;
    cursor: pointer;
}
</style>