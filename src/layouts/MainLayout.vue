<template>
  <div class="container_vue">
    <div class="main-content-container">
      <div class="menu" :class="{ 'sticky-element': isSticky }">
        <MainNav />
      </div>
      <div class="main-container">
        <router-view />
        <slot name="main"></slot>
      </div>
      <div class="aux-container">
        <slot name="aux"></slot>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import MainNav from '@/components/MainNav.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
  const stickyScrollPosition = 100;
  isSticky.value = window.scrollY > stickyScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.sticky-element {
  position: sticky;
  top: 0;
  /* Asegúrate de que el elemento se pegue en la parte superior */
  z-index: 1000;
  /* Usa un z-index alto para que el menú se muestre por encima de otros contenidos */
  /* Otros estilos necesarios para tu menú */
}
</style>