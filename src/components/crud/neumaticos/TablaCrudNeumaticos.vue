<template>
    <div class="main">
        <DataTable :value="store.neumatico" :paginator="true" :rows="10">
            <Column selectionMode="multiple" styleClass="width: 3em"></Column>
            <Column field="medida" header="MEDIDA" style="background-color: cadetblue;"></Column>


            <!-- Columna de calidad con slot personalizado -->
            <Column header="CALIDAD">
                <template #body="slotProps">
                    {{ calidades[slotProps.data.calidad_id] }}
                </template>
            </Column>

            <!-- Columna de tipo con slot personalizado -->
            <Column header="TIPO">
                <template v-slot:body="slotProps">
                    {{ tipos[slotProps.data.tipo_id] }}
                </template>
            </Column>
            <Column field="stock" header="STOCK"></Column>
            <Column field="precio" header="PRECIO"></Column>
            <Column body="actionTemplate" header="Acciones">
                <template #body="slotProps">
                    <span>
                        <i class="pi pi-pencil icon" @click="edit(slotProps.data)"
                            style="cursor: pointer; margin-right: 10px;"></i>
                        <i class="pi pi-trash icon" @click="deleteRow(slotProps.data)" style="cursor: pointer;"></i>
                    </span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import INeumaticosSimple from '@/interfaces/INeumaticosSimple';
import dataNeumaticos from '@/store/data';
import { defineProps, PropType, ref } from 'vue';

const presupuesto = ref([]);
const store = dataNeumaticos();

const props = defineProps({
    detalle: Array as PropType<INeumaticosSimple[]>
});

const calidades: { [key: number]: string } = {
    1: 'Extra',
    2: 'Primera',
    3: 'Segunda',
    4: 'Nuevo'
}

const tipos: { [key: number]: string } = {
    1: 'Turismo',
    2: 'Furgoneta',
    3: 'Nuevo'
}

const edit = (rowData: any) => {
    // lógica de edición
};

const deleteRow = (rowData: any) => {
    // lógica de eliminación
};

</script>
<style scoped lang="scss">
.icon {
    color: cornflowerblue;
}

.main {
    border-left: 4px solid orange;
    border-bottom: 4px solid orange;
}

.p-component {
    font-family: "Arial Narrow", serif;
    font-size: 12px;
    letter-spacing: 3px;
}
</style>