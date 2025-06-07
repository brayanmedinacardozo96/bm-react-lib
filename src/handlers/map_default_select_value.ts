import { SelectDto } from "../types";

/**
 * Construye un valor predeterminado para un selector.
 * @param labelPath Ruta al campo de la etiqueta (label) en el objeto.
 * @param valuePath Ruta al campo del valor (value) en el objeto.
 * @param data Objeto fuente.
 * @returns Objeto SelectDto con label y value.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapDefaultSelectValue = (labelPath: string, valuePath: string, data: any): SelectDto => {
    const label = labelPath.split('.').reduce((acc, key) => acc?.[key], data) ?? "";
    const value = valuePath.split('.').reduce((acc, key) => acc?.[key], data) ?? 0;
    return { label, value };
};
