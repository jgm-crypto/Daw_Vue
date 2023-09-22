<template>
  <div class="nav">
    <h6 class="tipo">NUEVOS</h6>
    <h6 class="tipo">OCASIÓN</h6>
  </div>
  <p>Selecciona entre una gran variedad de marcas y calidades que mas se ajusten a tus necesidades.</p>
  <button class="btn btn-outline-primary">Bootstrap</button>
  <div class="container">
    <div v-for="(neumatico,index) in marcas" :key="index">
      <router-link :to="{name:'PostDetail',params:{marca:neumatico.marca}}">
        {{ neumatico.marca }}
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import DataFetch from "@/servicios/dataFetch";
import {onMounted} from "vue";

const service = new DataFetch()
const marcas = service.getNeumaticos()

onMounted(async () => {
  await service.fetchAllNeumaticos()
  console.log(service)
})
</script>
<style scoped lang="scss">
.container {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a{
    text-decoration: none;
  }

  div {
    width: 200px;
    text-align: center;
    padding: 5px;
    margin: 10px;
    box-shadow: 1px 1px 10px rgba(1, 0, 1, 0.2);
    font-family: "Arial Narrow", serif;
    font-size: 24px;
    font-weight: bold;
    color: #183e75;
    cursor: pointer;
  }

  div:hover {
    background-color: #181818;
    color: white;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: end;
  width: 60%;
  margin: auto auto 50px;
  height: 60px;
}

.tipo {
  width: 30%;
  letter-spacing: 6px;
  font-family: "Arial Narrow", serif;
  font-size: 22px;
  border-bottom: 4px solid white;
  cursor: pointer;
  transition: border-bottom 0.5s ease-in-out, border-bottom 0.5s ease-in-out;
}

.tipo:hover {
  border-bottom: 4px solid orange;
}
</style>