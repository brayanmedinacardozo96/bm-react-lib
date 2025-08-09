export function validatePositiveNumber(message = "El valor debe ser un número positivo.") {
    return (value) => {
        if (value !== undefined && value !== null && value !== "" && Number(value) <= 0) {
            return message;
        }
        return undefined;
    };
}
