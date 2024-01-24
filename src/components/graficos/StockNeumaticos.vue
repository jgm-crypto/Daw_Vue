<template>
    <div class="flex flex-column w-full my-3 sm:my-0 sm:w-5">
        <p class="head m-0 pl-3 py-3 bg-bluegray-600 text-white">STOCK POR MEDIDAS</p>
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
const medidas = productos.map(producto => producto.medida);
const stock = productos.map(producto => producto.stock);

// Primero, crea un arreglo de objetos que incluya la marca y el stock correspondiente
let medidaYStock = medidas.map((medida, index) => {
    return { medida: medida, stock: stock[index] };
});

// Luego, ordena ese arreglo de objetos basándote en el stock
medidaYStock.sort((a, b) => b.stock - a.stock);

// Finalmente, separa los objetos ordenados en dos arreglos nuevamente
const medidasOrdenadas = medidaYStock.map(item => item.medida);
const stockOrdenado = medidaYStock.map(item => item.stock);

const config = {
    type: 'bar',
    data: {
        labels: medidasOrdenadas,
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
                    color: 'black', // Color del texto de los ticks (marcas) del eje x
                }
            },
            y: {
                ticks: {
                    color: 'black', // Color del texto de los ticks (marcas) del eje y
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black' // Color del texto de las leyendas
                }
            },
            title: {
                display: false
            },
            tooltip: {
                titleFontColor: 'white', // Color del título del tooltip
                bodyFontColor: 'white', // Color del cuerpo del tooltip
            }
        },
        onClick: function (event, elements) {
            if (elements.length === 1) {
                const chart = elements[0].chart;
                const index = elements[0].index;
                const label = chart.data.labels[index];

                // Aquí defines los enlaces para cada etiqueta/marca
                const urlMap = {
                    'Dunlop': 'url-para-dunlop',
                    'Michelin': 'url-para-michelin',
                    // ... más marcas y sus URLs
                };

                // Redirigir a la URL basada en la etiqueta de la barra a la que se le hizo clic
                const url = urlMap[label];
                if (url) {
                    window.location.href = url; // O puedes usar window.open(url) para abrir en una nueva pestaña
                }
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

@media (max-width: 770px) {

    #container {
        width: 100%;
        margin-bottom: 5px;
    }
}
</style>