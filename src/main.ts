import { createApp } from 'vue'
import App from './App.vue'
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import router from './router'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config'

// Importar los estilos de PrimeVue y PrimeIcons
import 'primevue/resources/themes/saga-blue/theme.css' // tema opcional
import 'primevue/resources/primevue.min.css' // estilos principales
import 'primeicons/primeicons.css' // iconos
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
import AnimateOnScroll from 'primevue/animateonscroll';

const pinia = createPinia()
const app = createApp(App)
app.directive('font-size', {
    beforeMount: (el, binding) => {
        // el.style.color = 'blue'
        el.style.color = binding.value
    }
})

app.component('v-select', VueSelect);
app.component('v-button', Button);
app.use(pinia).use(router).use(PrimeVue)
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app')
