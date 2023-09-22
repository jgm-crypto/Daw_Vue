import {ref, Ref} from 'vue'
import INeumaticos from "@/interfaces/INeumaticos";
import {RouteParamValue} from "vue-router";

class DataFetch {
    private neumaticos: Ref<Array<INeumaticos>>

    constructor() {
        this.neumaticos = ref<Array<INeumaticos>>([])
    }

    getNeumaticos(): Ref<Array<INeumaticos>> {
        return this.neumaticos
    }

    async fetchAllNeumaticos(): Promise<void> {
        try {
            const url = 'http://localhost/ProyectoAPJ/public/index.php/api/getAllNeumaticos'
            const response = await fetch(url)
            const json = await response.json()
            this.neumaticos.value = await json
        } catch (error) {
            console.log(error)
        }
    }

    async fetchByMarca(marca: string | RouteParamValue[]): Promise<void> {
        try {
            const url = `http://localhost/ProyectoAPJ/public/index.php/api/getNeumaticosByMarca/${marca}`
            const response = await fetch(url)
            const json = await response.json()
            this.neumaticos.value = await json
        } catch (error) {
            console.log(error)
        }
    }
}

export default DataFetch