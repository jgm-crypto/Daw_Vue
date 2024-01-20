function validateForm(input: string, value: any) {
    switch (input) {
        case "ancho":
            if (value.length != 3) {
                return false;
            } else {
                return true;
            }
        case "perfil":
            if (value.length != 2) {
                return false;
            } else {
                return true;
            }
        case "diametro":
            if (value.length != 2) {
                return false;
            } else {
                return true;
            }
    }
}

export default validateForm;