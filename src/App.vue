<template>
  <RouterView />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
body {
  margin: 0;
}

//Fuentes accesibles en todo el proyecto
.narrow {
  font-family: "Arial Narrow", serif;
  font-size: medium;
}

.sans {
  font-family: sans-serif;
  font-size: large;
}

.figtree {
  font-family: "Figtree", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 8px;
  font-size: 60px;
}

.orbitron {
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  letter-spacing: 4px;
  font-style: normal;
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
