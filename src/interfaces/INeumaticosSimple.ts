interface INeumaticosSimple {
    [key: string]: string | number; //Esto permite usar cualquier cadena como clave para acceder a una propiedad
    codigo: string,
    medida: string,
    marca: string,
    stock: number,
    precio: string,
    tipo_id: number,
    calidad_id: number
}

export default INeumaticosSimple