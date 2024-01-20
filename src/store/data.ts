import INeumaticosSimple from "@/interfaces/INeumaticosSimple";
import { defineStore } from "pinia";
import { ref } from 'vue';

const apiUrl = ref(process.env.VUE_APP_API_URL);

const dataNeumaticos = defineStore('neumaticos', {
    state: () => {
        return {
            neumatico: [] as INeumaticosSimple[]
        }
    },
    actions: {
        async getMaster(): Promise<INeumaticosSimple[]> {
            try {
                const url = apiUrl.value + "/master"
                const response = await fetch(url)
                const res = await response.json();

                for (const item of res) {
                    const newNeumatico = {
                        codigo: item['codigo'],
                        medida: `${item['ancho']}/${item['perfil']} ${item['diametro']} ${item['carga']}${item['cVelocidad']}`,
                        marca: item['marca'],
                        stock: item['stock'],
                        precio: item['precio'],
                        tipo_id: item['tipo_id'],
                        calidad_id: item['calidad_id']
                    };
                    this.neumatico.push(newNeumatico);
                }
                return res;
            } catch (error) {
                console.log(error);
                throw new Error("Error al ejecutar la peticion");
            }
        },
        getNeumatico(campo: string, value: string) {
            const result = this.neumatico.filter((n: INeumaticosSimple) => n[campo] === value);
            return result;
        }
    }
})

export default dataNeumaticos