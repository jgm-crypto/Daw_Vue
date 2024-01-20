<template>
    <div class="admin-body">
        <Transition name="admin-crud">
            <div class="div-admin-crud">
                <p @click="handleOptionCrud(1)">NUEVO</p>
            </div>
        </Transition>
        <Transition name="crud-table">
            <div class="div-table-crud" v-show="gestionMenu.crud_table.value">
                <TablaCrudNeumaticos />
            </div>
        </Transition>
        <Transition name="crud">
            <div class="div-crud" v-show="store.isVisible">
                <CrudAdmin :opcion="option" />
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import TablaCrudNeumaticos from '@/components/crud/neumaticos/TablaCrudNeumaticos.vue';
import CrudAdmin from '@/components/crud/neumaticos/CrudAdmin.vue';
import { useStore } from '@/store/dinamic';
import { onMounted, ref } from 'vue';

const store = useStore();
const option = ref<number>(0);

const gestionMenu = {
    gestion: ref(false),
    crud_menu: ref(false),
    crud_table: ref(false),
    crud: ref(false),
};

const handleOptionCrud = ((param: number) => {
    option.value = param;
    store.showComponent();
})

onMounted(() => {
    gestionMenu.crud_table.value = true;
})
</script>
<style scoped lang="scss">
.admin-body {
    position: relative;
    display: flex;
    justify-content: space-between;

    .div-admin-crud {
        display: flex;
        flex-direction: column;
        border-right: 4px solid orange;
        width: 15%;
        background-color: dimgray;
        color: white;
        font-weight: bold;
        height: 100vh;

        p {
            width: 100%;
            text-align: end;
            padding: 5px;
            margin-top: 20px;
            border-bottom: 2px solid black;
        }

    }

    .div-table-crud {
        position: relative;
        width: 80%;
    }

    .div-crud {
        position: absolute;
        right: 0;
        border-left: 4px solid orange;
        width: 80%;
    }
}

p {
    cursor: pointer;
    letter-spacing: 3px;
    margin: 0;
}

/****** admin-crud ******/
.admin-crud-enter-active,
.admin-crud-leave-active {
    transition: all 0.5s ease;
}

.admin-crud-enter-from,
.admin-crud-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

/****** crud ******/
.crud-enter-active,
.crud-leave-active {
    transition: all 0.5s ease;
}

.crud-enter-from,
.crud-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

/****** crud table ******/
.crud-table-enter-active,
.crud-table-leave-active {
    transition: all 0.5s ease;
}

.crud-table-enter-from,
.crud-table-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>