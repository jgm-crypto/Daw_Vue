<template>
    <div class="search flex justify-content-start align-content-center w-6 flex-wrap">
        <div class="flex w-8">
            <div class="flex flex-wrap align-content-center">
                <i class="pi pi-search mx-6" @click="$emit('buscarNeumaticos', { campo: 'medida', valor: medida })"
                    style="cursor: pointer;" />
            </div>
            <InputText placeholder="205/55 16" v-model="medida" />
        </div>
    </div>
</template>
<script setup lang="ts">
import InputText from 'primevue/inputtext';

import INeumaticos from '@/interfaces/INeumaticos';
import { ref, defineEmits, defineProps, PropType } from 'vue';

const medida = ref('');

const emits = defineEmits(["buscarNeumaticos"])

const props = defineProps({
    neumaticos: Array as PropType<INeumaticos[]>
});

</script>
<style scoped lang="scss">
.search {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    color: var(--primary-color-text);
    height: 80px;
    border-radius: 40px 0 0 40px;
    padding-left: 10px;
}

.p-inputtext {
    color: black;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>