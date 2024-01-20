<template>
    <div class="flex justify-content-around lg:flex-row flex-column main">
        <StockNeumaticos />
        <StockMarcas />
    </div>
</template>
<script setup lang="ts">
import StockNeumaticos from '@/components/graficos/StockNeumaticos.vue';
import StockMarcas from '@/components/graficos/StockMarcas.vue';
</script>
<style scoped lang="scss">
.main {
    padding: 10px;
}
</style>