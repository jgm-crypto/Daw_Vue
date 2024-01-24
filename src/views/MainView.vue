<template>
    <HeaderComponent />
    <div>
        <Message :severity="tkBearer.severity" :life="1000" :closable="false" :sticky="false">
            <template #messageicon>
                <span class="ml-2">{{ tkBearer.msg }}</span>
            </template>
        </Message>
    </div>
    <div>
        <Transition name="side-bar-buscar">
            <div v-show="show" class="flex flex-wrap align-content-center justify-content-center h-23rem">
                <div>
                    <p>Busca neumaticos por medida</p>
                    <p>y filtra según las necesidades.</p>
                </div>
                <div class="flex justify-content-end lg:w-full">
                    <BuscadorNeus @buscarNeumaticos="buscar" />
                </div>
            </div>
        </Transition>
    </div>
    <FooterComponent />
</template>
<script setup lang="ts">
import Message from 'primevue/message';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BuscadorNeus from '@/components/BuscadorNeus.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const tkBearer = useAuthStore();
const router = useRouter();
const show = ref(false);
const message = ref(true);

interface buscarParametros {
    campo: string,
    valor: string
}

const buscar = ((medida: buscarParametros) => {
    router.push({ name: 'buscar', params: { campo: medida.campo, valor: medida.valor } });
})

onMounted(() => {
    show.value = true;
})

</script>
<style scoped lang="scss">
* {
    font-size: 11px;
}

.side-bar-buscar-enter-active,
.side-bar-buscar-leave-active {
    transition: all 1.5s ease;
}

.side-bar-buscar-enter-from,
.side-bar-buscar-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>