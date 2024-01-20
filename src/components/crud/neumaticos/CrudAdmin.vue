<template>
    <div v-if="props.opcion === 1">
        <InsertNeu />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import InsertNeu from './InsertNeu.vue';

const props = defineProps<{
    opcion: number;
}>()

</script>

<style scoped lang="scss"></style>