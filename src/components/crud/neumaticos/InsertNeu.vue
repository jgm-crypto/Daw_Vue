<template>
    <div class="main">
        <div class="row justify-content-end">
            <div class="col btn-group col-md-6">
                <input @click="toggleBtn" class="btn-crud-head" type="button" value="VOLVER">
                <input type="button" class="btn-crud-head" @click="saveNeumatico" :disabled="!allValid" value="GUARDAR">
                <input type="button" class="btn-crud-head" value="REINICIAR">
            </div>
        </div>

        <div class="row">
            <div class="col col-md-4 title">
                <p>TIPO DE NEUMATICO</p>
            </div>
        </div>
        <div class="row">
            <div class="col btn-group col-md-3">
                <input type="button" class="btn-crud" value="NUEVO" @click="handleTipoNeu(1)">
                <input type="button" class="btn-crud" value="OCASIÓN" @click="handleTipoNeu(2)">
            </div>
        </div>

        <div class="row">
            <div class="col col-md-4 title">
                <p>MEDIDA COMPLETA</p>
            </div>
        </div>
        <div class="medida row" v-show="nuevo">
            <div class="col-4 col_input">
                <div>
                    <div>
                        <label for="ancho" class="text-nav">Ancho</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.ancho.value"
                        @blur="checkForm('ancho', insert.ancho.value)">
                </div>
                <div>
                    <div>
                        <label for="perfil" class="text-nav">Perfil</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.perfil.value"
                        @blur="checkForm('perfil', insert.perfil.value)">
                </div>
                <div>
                    <div>
                        <label for="diametro" class="text-nav">Diametro</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.diametro.value"
                        @blur="checkForm('diametro', insert.diametro.value)">
                </div>
                <div>
                    <div>
                        <label for="indice carga" class="text-nav">Carga</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.carga.value"
                        @blur="checkForm('carga', insert.carga.value)">
                </div>
                <div>
                    <div>
                        <label for="codigo velocidad" class="text-nav">Velocidad</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.velocidad.value"
                        @blur="checkForm('velocidad', insert.velocidad.value)">
                </div>
            </div>
        </div>

        <div class="medida row" v-show="nuevo">
            <div class="col-4 col_input">
                <div>
                    <div>
                        <label for="marca" class="text-nav">Marca</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.marca.value"
                        @blur="checkForm('marca', insert.marca.value)">
                </div>
                <div>
                    <div>
                        <label for="stock" class="text-nav">Stock</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.stock.value"
                        @blur="checkForm('stock', insert.stock.value)">
                </div>
                <div>
                    <div>
                        <label for="precio" class="text-nav">Precio</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.precio.value"
                        @blur="checkForm('precio', insert.precio.value)">
                </div>
            </div>
        </div>

        <div class="medida row" v-show="ocasion">
            <div class="col-4 col_input">
                <div>
                    <div>
                        <label for="calidad" class="text-nav">Calidad</label>
                    </div>
                    <v-select class="style-chooser" v-model="insert.calidad.value" :options="tipos"></v-select>
                </div>
                <div>
                    <div>
                        <label for="mm" class="text-nav">Milimetros</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.mm.value">
                </div>
                <div>
                    <div>
                        <label for="dot" class="text-nav">DOT</label>
                    </div>
                    <input type="text" class="form-control" v-model="insert.dot.value">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InsertType from '@/interfaces/IInsert';
import validate from '@/composables/funciones';
import { ref } from 'vue';
import DataFetch from '@/servicios/dataFetch';
import { useStore } from '@/store/dinamic';

const store = useStore();
const service = new DataFetch();
const nuevo = ref(false);
const ocasion = ref(false);
const campos = ['ancho', 'perfil', 'diametro', 'carga', 'velocidad', 'marca', 'stock', 'precio', 'calidad', 'mm', 'dot'];

const insert: InsertType = campos.reduce((obj, field) => {
    obj[field] = { value: '', valid: false };
    return obj;
}, {} as InsertType);


const tipos: string[] = [
    'Primera',
    'Segunda',
    'Extra'
]

const toggleBtn = (() => {
    store.hideComponent();
})

//Muestra los campos del formulario segun el tipo de neumatico
const handleTipoNeu = ((param: number) => {
    if (param === 1) {
        nuevo.value = true;
        ocasion.value = false;
    } else {
        ocasion.value = true;
    }
})

//Valida los campos del formulario
const checkForm = ((input: string, value: any) => {
    insert[input].valid = validate(input, value) as boolean;
})

//Variable que evalua si todos los valores del formulario tienen el formato correcto
//return boolean
const allValid = Object.values(insert).every(item => item.valid === true);
const saveNeumatico = (() => {
    let cleanData = {
        ancho: insert.ancho.value,
        perfil: insert.perfil.value,
        diametro: insert.diametro.value,
        carga: insert.carga.value,
        velocidad: insert.velocidad.value,
        marca: insert.marca.value,
        stock: insert.stock.value,
        precio: insert.precio.value,
        calidad: insert.calidad.value,
        mm: insert.mm.value,
        dot: insert.dot.value
    }
    service.insertNeu(cleanData);
})
</script>

<style scoped lang="scss">
.main {
    background-color: rgb(233, 232, 232);
    color: black;
    padding: 20px;
    height: 100vh;
}

.btn-group {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.btn-crud {
    border: none;
    border-radius: 3px;
    background-color: white;
    color: black;
    font-weight: bold;
    text-align: start;
    width: 100px;
    padding: 3px 12px 1px 12px;
}

.title {
    width: 100%;
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: start;
}

.medida {
    padding: 5px;

    .col_input {

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .text-nav {
            text-align: start;
            width: 100%;
        }

        input[type="text"] {
            height: 30px;
            width: 70px;
        }
    }
}
</style>