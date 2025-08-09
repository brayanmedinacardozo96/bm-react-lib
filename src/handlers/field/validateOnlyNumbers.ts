export function validateOnlyNumbers(message = "Solo se permiten números.") {
    return (value: string) => {
        if (value === null || value === undefined || value === "") {
            return message;
        }
        if (!/^\d+(\.\d+)?$/.test(value)) {
            return message;
        }
        return undefined;
    };
}