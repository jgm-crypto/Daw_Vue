<template>
    <div class="flex align-items-center flex-wrap justify-content-evenly my-6 div-body-main">
        <Transition name="side-bar-marcas">

            <div class="flex flex-column justify-content-between h-full">
                <Listbox :options="marcas" filter optionLabel="marca" class="lg:w-6 w-6 side-bar-marcas">
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <div @click="filtrarResultado('marca', slotProps.option.marca)">{{ slotProps.option.marca }}
                            </div>
                        </div>
                    </template>
                </Listbox>
            </div>

        </Transition>
        <TablaMain :detalle="medidaSelect" />
    </div>
</template>
<script setup lang="ts">
import Listbox from 'primevue/listbox';
import TablaMain from '@/components/TablaMain.vue';
import INeumaticosSimple from '@/interfaces/INeumaticosSimple';
import dataNeumaticos from '@/store/data';
import { ref, defineProps, watch } from 'vue';

const store = dataNeumaticos();
const marcas = ref([]);
const medidaSelect = ref<INeumaticosSimple[]>([]);
const props = defineProps({
    campo: {
        type: String,
        default: ''
    },
    valor: {
        type: String,
        default: ''
    }
})

const filtrarResultado = ((campo: string, valor: string) => {
    medidaSelect.value = store.getNeumatico(campo, valor);
})

// Observa los cambios en los props para actualizar los resultados
watch(() => [props.campo, props.valor], ([newCampo, newVal]) => {
    medidaSelect.value = store.getNeumatico(newCampo, newVal);
}, {
    immediate: true // Esto hará que el watch se ejecute inmediatamente al montar el componente
});
</script>
<style scoped lang="scss"></style>