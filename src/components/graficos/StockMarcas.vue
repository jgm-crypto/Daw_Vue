<template>
    <div class="flex flex-column w-full sm:w-5">
        <p class="head m-0 pl-3 py-3 bg-bluegray-600 text-white">STOCK POR MARCAS</p>
        <div id="container">
            <canvas ref="chartRef" id="chart"></canvas>
        </div>
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
let neumaticosPorMarca: { [index: string]: number } = {};

productos.forEach(neumatico => {
    neumaticosPorMarca[neumatico.marca] = 0;
})

productos.forEach(neumatico => {
    for (let clave in neumaticosPorMarca) {
        if (neumatico.marca === clave) {
            neumaticosPorMarca[neumatico.marca] += neumatico.stock;
        }
    }
})

const marcas = Object.keys(neumaticosPorMarca);
const stockPorMarca = Object.values(neumaticosPorMarca);

// Primero, crea un arreglo de objetos que incluya la marca y el stock correspondiente
let marcasYStock = marcas.map((marca, index) => {
    return { marca: marca, stock: stockPorMarca[index] };
});

// Luego, ordena ese arreglo de objetos basándote en el stock
marcasYStock.sort((a, b) => b.stock - a.stock);

// Finalmente, separa los objetos ordenados en dos arreglos nuevamente
const marcasOrdenadas = marcasYStock.map(item => item.marca);
const stockOrdenado = marcasYStock.map(item => item.stock);

const config = {
    type: 'bar',
    data: {
        labels: marcasOrdenadas,
        datasets: [{
            label: 'Unidades',
            backgroundColor: 'rgba(19,116,202)',
            color: 'white',
            data: stockOrdenado,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    color: 'black', // Color del texto de los ticks (marcas) del eje x
                },
                grid: {
                    drawTicks: true,
                    drawOnChartArea: true,
                    tickColor: 'grey'
                }
            },
            y: {
                grace: '40%',
                ticks: {
                    color: 'black', // Color del texto de los ticks (marcas) del eje y
                }
            }
        },
        plugins: {
            legend: {
                align: 'end',
                labels: {
                    color: 'black',
                    boxHeight: 7,
                    usePointStyle: true
                }
            },
            title: {
                display: false
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
.head {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: large;
    letter-spacing: 3px;
    text-align: start;
    border-radius: 10px 10px 0 0;
}

#container {
    background-color: #ececec;
    padding: 20px 30px;
    border-radius: 0 0 10px 10px;
    min-height: 500px;
}
</style>