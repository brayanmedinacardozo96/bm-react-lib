export const useGenerateCode = (): string => {
    // Utilizamos una función para generar caracteres aleatorios hexadecimales
    const randomHex = (length: number) => {
        return Array.from({ length }, () =>
            Math.floor(Math.random() * 16).toString(16)
        ).join('');
    };

    // Construimos el UUID según el formato estándar
    return (
        randomHex(8) + '-' + // 8 caracteres
        randomHex(4) + '-' + // 4 caracteres
        '4' + randomHex(3) + '-' + // 4 caracteres con el primero fijo como '4'
        ((Math.random() * 4) | 8).toString(16) + randomHex(3) + '-' + // 4 caracteres con el primer bit de 4 a 7
        randomHex(12) // 12 caracteres
    );
};
