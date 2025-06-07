import { SelectDto } from "../types";


/**
 * Mapea un array de cualquier tipo de datos a un array de SelectDto.
 * @param dataArray Array de objetos fuente.
 * @param labelPath Ruta al campo de la etiqueta (label) en cada objeto.
 * @param valuePath Ruta al campo del valor (value) en cada objeto.
 * @returns Array de SelectDto.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapToSelectDto = <T extends Record<string, unknown>>(
    dataArray: T[],
    labelPath: string,
    valuePath: string
): SelectDto[] => {
    return dataArray.map(item => {
        const label = labelPath.split('.').reduce((acc: any, key) => acc && (acc as Record<string, unknown>)[key], item) ?? "";
        const value = valuePath.split('.').reduce((acc: any, key) => acc && (acc as Record<string, unknown>)[key], item) ?? "0";
        return {
            label: String(label),
            value: String(value)
        };
    });
};