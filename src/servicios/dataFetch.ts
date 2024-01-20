import INeumaticos from "@/interfaces/INeumaticos";
import { RouteParamValue } from "vue-router";
import { ref } from 'vue';
import { useAuthStore } from "@/store/auth";

const apiUrl = ref(process.env.VUE_APP_API_URL);

class DataFetch {

    async getMaster(): Promise<INeumaticos[]> {
        try {
            const url = apiUrl.value + "neumaticos/master"
            const response = await fetch(url)
            return response.json();
        } catch (error) {
            console.log(error);
            throw new Error("Error al ejecutar la peticion");

        }
    }

    async getMarcas(): Promise<[]> {
        try {
            const url = apiUrl.value + "/marcas"
            const response = await fetch(url)
            return response.json();
        } catch (error) {
            console.log(error);
            throw new Error("Error al ejecutar la peticion");

        }
    }

    async fetchByMarca(marca: string | RouteParamValue[]): Promise<INeumaticos[]> {
        try {
            const url = apiUrl.value + `/neumatico/${marca}`
            const response = await fetch(url)
            return response.json();
        } catch (error) {
            console.log(error);
            throw new Error("Error al ejecutar la peticion");
        }
    }

    async fetchByParams(medida: string, tipo: string, calidad: string | RouteParamValue[]): Promise<INeumaticos[]> {
        try {
            let url = apiUrl.value + `/test/?medida=${medida}&tipo=${tipo}`
            if (calidad) {
                url += `&calidad=${calidad}`;
            }
            const response = await fetch(url)
            return response.json();
        } catch (error) {
            console.log(error);
            throw new Error("Error al ejecutar la peticion");
        }
    }

    async insertNeu(data: object | RouteParamValue[]): Promise<INeumaticos[]> {
        try {
            const url = apiUrl.value + '/insertNeumatico';
            const bodyData = data;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indicar que se envía JSON en el cuerpo
                },
                body: JSON.stringify(bodyData) // Convertir los datos a JSON y enviarlos en el cuerpo
            });

            if (!response.ok) {
                throw new Error('La solicitud no pudo completarse correctamente.');
            }

            return response.json();
        } catch (error) {
            console.log(error);
            throw new Error('Error al ejecutar la petición');
        }
    }

    async insertCliente(data: object | RouteParamValue[]) {
        try {
            const url = apiUrl.value + '/saveCliente';
            const bodyData = data;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indicar que se envía JSON en el cuerpo
                },
                body: JSON.stringify(bodyData) // Convertir los datos a JSON y enviarlos en el cuerpo
            });

            if (!response.ok) {
                throw new Error('La solicitud no pudo completarse correctamente.');
            }

            const responseData = await response.json();
            if (responseData.success) {
                return true;
            } else {
                // Manejar la respuesta de error del servidor
                console.error('Error al insertar el cliente:', responseData.error);
                return false;
                // Aquí puedes mostrar un mensaje de error al usuario
            }
        } catch (error) {
            console.log(error);
            throw new Error('Error al ejecutar la petición');
        }
    }

    async iniciarSesion(data: object | RouteParamValue[]) {
        try {
            const url = apiUrl.value + '/api/login_check';
            const bodyData = data;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData)
            });

            if (!response.ok) {
                throw new Error('La solicitud no pudo completarse correctamente.');
            }

            const responseData = await response.json();
            if (responseData.data.status === 'OK') {
                const tkBearer = useAuthStore();
                tkBearer.setToken(responseData.token);
                return true;
            } else {
                console.error('Error al iniciar sesion:', responseData.error);
                return false;
            }
        } catch (error) {
            console.log(error);
            throw new Error('Error al ejecutar la petición');
        }
    }

}

export default DataFetch