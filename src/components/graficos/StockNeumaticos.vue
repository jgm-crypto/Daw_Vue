<template>
    <div id="container">
        <canvas ref="chartRef" id="chart"></canvas>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import dataNeumaticos from '@/store/data'; // Asumiendo que la ruta es correcta
import { Chart, BarController, CategoryScale, BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// Registro de componentes necesarios
Chart.register(BarController, CategoryScale, BarElement, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartRef = ref(null); // Utilizamos ref para referenciar el elemento canvas
const chartInstance = ref(null); // Almacenamos la instancia del gráfico aquí

const store = dataNeumaticos();
const productos = store.neumatico;
const medidas = productos.map(producto => producto.medida);
const stock = productos.map(producto => producto.stock);

const config = {
    type: 'bar',
    data: {
        labels: medidas,
        datasets: [{
            label: 'Nuevos',
            backgroundColor: 'rgba(19,116,202)',
            color: 'white',
            data: stock,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
            x: {
                ticks: {
                    color: 'white', // Color del texto de los ticks (marcas) del eje x
                }
            },
            y: {
                ticks: {
                    color: 'white', // Color del texto de los ticks (marcas) del eje y
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Color del texto de las leyendas
                }
            },
            title: {
                display: true,
                text: 'Stock por Medida',
                color: 'white', // Color del título del gráfico
                font: {
                    size: 18 // Puedes también cambiar el tamaño de la fuente y otras propiedades aquí
                }
            },
            tooltip: {
                titleFontColor: 'white', // Color del título del tooltip
                bodyFontColor: 'white', // Color del cuerpo del tooltip
            }
        }
    }
};

onMounted(() => {
    if (chartRef.value) {
        const ctx = chartRef.value.getContext('2d');
        chartInstance.value = new Chart(ctx, config);
    }
});

onBeforeUnmount(() => {
    if (chartInstance.value) {
        chartInstance.value.destroy();
    }
});
</script>
<style scoped lang="scss">
#container {
    overflow-x: auto;
    background-color: #283B4F;
    padding: 20px 30px;
    border-radius: 10px;
    min-height: 340px;
    width: 40%;
}

@media (max-width: 770px) {

    #container {
        width: 100%;
        margin-bottom: 5px;
    }
}
</style>