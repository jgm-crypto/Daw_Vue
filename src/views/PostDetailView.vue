<template>
  <table class="results">
    <tr>
      <th>Medida</th>
      <th>Stock</th>
      <th>Precio</th>
      <th>Ficha</th>
    </tr>
    <tr v-for="(neumatico,index) in neumaticos" :key="index">
      <td @click="setNeumatico(neumatico)" class="medida">
        {{ neumatico.ancho }}/{{ neumatico.perfil }} {{ neumatico.carga }} {{ neumatico.cVelocidad }}
      </td>
      <td>{{ neumatico.stock }}</td>
      <td>{{ neumatico.precio }}</td>
      <td>
        <div class="ficha">
          <h3>{{ ficha_neumatico.marca }}</h3>
          <h3>{{ ficha_neumatico.medida }}</h3>
          <div class="caracteristicas" style="display: flex;flex-direction: column">
            <span style="background-color: #008800;width:70%"></span>
            <span style="background-color: #2aaf2a;width:80%"></span>
            <span style="background-color: #19fa11;width:90%"></span>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import DataFetch from "@/servicios/dataFetch";

const service = new DataFetch()
const neumaticos = service.getNeumaticos()

onMounted(async () => {
  const route = useRoute()
  let elem = route.params.marca
  await service.fetchByMarca(elem)
})

const ficha_neumatico = ref({
  medida: "",
  imagen: "",
  caracteristicas: {
    adherencia: "",
    consumo: "",
    ruido: ""
  }
});

function setNeumatico(datos) {
  ficha_neumatico.value.medida = datos.ancho + "/" + datos.perfil + " " + datos.diametro + " " + datos.carga + datos.cVelocidad;
}
</script>
<style scoped lang="scss">
table, td, th {
  border-bottom: 2px solid #183e75;
}

table {
  margin-top: 20px;
  margin-bottom: 100px;
  width: 900px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
}

.results th {
  font-family: "Sitka Text", serif;
  border-top: 3px solid black;
  background-color: #183e75;
  padding: 3px;
  color: white;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.results td {
  vertical-align: center;
}

.medida {
  font-family: "Bauhaus 93", serif;
  cursor: pointer;
}

.medida:hover {
  color: dodgerblue;
  border-bottom: 2px solid black;
}

.caracteristicas span {
  color: white;
  font-weight: bold;
  padding-bottom: 4px;
  display: block;
  height: 20px;
  text-align: end;
}

</style>