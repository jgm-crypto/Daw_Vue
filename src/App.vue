<template>
  <p class="title">Symfony / Vue 3 Composition Api / TypeScript / PrimeVue</p>
  <RouterView />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

.title {
  margin: 0;
  letter-spacing: 4px;
  padding: 12px 0 23px 0;
  background-color: black;
  font-size: 13px;
  color: white;
  font-weight: bold;
}

.style-chooser {
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  font-size: 11px;
  width: 12vw;
  color: black;
}

.btn-crud-head {
  background-color: grey;
  letter-spacing: 3px;
  font-weight: bold;
  color: white;
  font-size: 15px;
  border-radius: 3px;
  border: 2px solid rgb(53, 53, 53);
  width: 120px;
}
</style>
