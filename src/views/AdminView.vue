<template>
    <Transition name="admin-nav">
        <div class="div-admin-nav" v-show="nav">
            <router-link :to="{ name: 'Neumaticos' }">NEUMATICOS</router-link>
            <router-link :to="{ name: 'Neumaticos' }">CLIENTES</router-link>
            <router-link :to="{ name: 'Neumaticos' }">PRESUPUESTOS</router-link>
            <router-link :to="{ name: 'Neumaticos' }">FACTURAS</router-link>
            <router-link :to="{ name: 'Neumaticos' }">CITAS</router-link>
        </div>
    </Transition>

    <router-view />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const nav = ref(false);

onMounted(() => {
    nav.value = true;
})
</script>

<style scoped lang="scss">
* {
    font-family: "Arial Narrow", serif;
    font-size: 13px;
    cursor: pointer;
    letter-spacing: 3px;
    margin: 0;
    text-decoration: none;
    color: black;
}

.div-admin-nav {
    display: flex;
    padding-top: 10px;
    margin-top: 40px;
    justify-content: space-around;
    border-top: 4px solid orange;
    border-bottom: 3px solid black;
}

/****** admin-nav ******/
.admin-nav-enter-active,
.admin-nav-leave-active {
    transition: all 0.5s ease;
}

.admin-nav-enter-from,
.admin-nav-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}
</style>