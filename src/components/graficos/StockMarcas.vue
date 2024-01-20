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

const config = {
    type: 'bar',
    data: {
        labels: marcas,
        datasets: [{
            label: 'Unidades',
            backgroundColor: 'rgba(19,116,202)',
            color: 'white',
            data: stockPorMarca,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    color: 'white', // Color del texto de los ticks (marcas) del eje x
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
                    color: 'white', // Color del texto de los ticks (marcas) del eje y
                }
            }
        },
        plugins: {
            zoom: {
                pan: {//Desplazamiento del grafico
                    enabled: true,
                    mode: 'x',
                    //overScaleMode:'x',//Para mover el grafico desde fuera de el elemento
                    modifierKey: 'ctrl'
                },
                zoom: {
                    mode: 'x',
                    wheel: {
                        enabled: true,
                        modifierKey: 'ctrl'
                    },
                    drag: {//Seleccion de seccion
                        enabled: true,
                        backgroundColor: 'rgba(0,255,255,0.3)',
                        borderColor: 'black',
                        borderWidth: 2
                    }
                }
            },
            legend: {
                align: 'end',
                labels: {
                    color: 'white',
                    boxHeight: 7,
                    usePointStyle: true
                }
            },
            title: {
                display: true,
                text: 'Stock por Marcas',
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