<template>
    <div class="data-view">
        <DataView :value="props.detalle" dataKey="codigo" paginator :rows="6">
            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
                            :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                                :src="require(`@/assets/img/${item.marca}.png`)" />
                            <div
                                class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <div class="text-1xl font-bold text-900">{{ item.medida }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.marca }}</span>
                                        </span>
                                        <span class="flex align-items-center gap-2">
                                            <span class="font-semibold"> {{ tipos[item.tipo_id] }}</span>
                                        </span>
                                        <span class="flex align-items-center gap-2">
                                            <span class="font-semibold"> {{ calidades[item.calidad_id] }}</span>
                                        </span>
                                        <Tag :value="item.stock" :severity="getSeverity(item)"></Tag>

                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
                                    style="cursor: pointer;">
                                    <span class="text-1xl font-semibold">{{ item.precio }} <i class="pi pi-euro" rounded
                                            style="font-size: 1rem;" /></span>
                                    <div class="flex flex-wrap align-items-center">
                                        <p>Presupuesto</p>
                                        <i class="pi pi-play" rounded style="font-size: 1rem;" />
                                    </div>
                                    <div class="flex flex-wrap align-items-center">
                                        <p>Comprar</p>
                                        <i class="pi pi-cart-plus" rounded style="font-size: 1rem;" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup lang="ts">
import DataView from 'primevue/dataview';
import INeumaticosSimple from '@/interfaces/INeumaticosSimple';
import { PropType, defineProps } from 'vue';

const props = defineProps({
    detalle: Array as PropType<INeumaticosSimple[]>
});

const getSeverity = (item: INeumaticosSimple) => {
    switch (item.stock) {
        case item.stock = 8:
            return 'success';

        case item.stock = 4:
            return 'warning';

        case item.stock = 2:
            return 'danger';
    }
};

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
</script>
<style scoped lang="scss">
* {
    font-size: 11px;
}

.data-view {
    width: 50%;
}

.icon {
    font-size: 1rem;
}
</style>
