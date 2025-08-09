import { SelectDto } from "../../types";

export interface FilterOptions<T> {
    key: keyof T;
    value: unknown;
}

export const defaultValueHandler = <T extends Record<string, unknown>>(
    dataArray: T[],
    labelPath: string,
    valuePath: string,
    filterOptions?: FilterOptions<T>
): SelectDto[] => {
    let filteredData = dataArray;

    // Aplicar filtro si se proporciona
    if (filterOptions) {
        const { key, value } = filterOptions;
        filteredData = dataArray.filter((item) => item[key] === value);
    }

    // Mapear a SelectDto
    return filteredData.map((item) => ({
        label: getNestedValue(item, labelPath),
        value: getNestedValue(item, valuePath),
    }));

};

// Función auxiliar para obtener valores anidados usando dot notation
export const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
    return path.split('.').reduce((current: Record<string, unknown> | unknown, key: string) => {
        return current && typeof current === 'object'
            ? (current as Record<string, unknown>)[key]
            : '';
    }, obj) as string;
};

// Handler específico para casos comunes
export const filterAndMapToSelect = <T extends Record<string, unknown>>(
    dataArray: T[],
    config: {
        labelPath: string;
        valuePath: string;
        filter?: FilterOptions<T>;
    }
): SelectDto[] => {
    return defaultValueHandler(
        dataArray,
        config.labelPath,
        config.valuePath,
        config.filter
    );
};