import { SelectDto } from "../../types";
export interface FilterOptions<T> {
    key: keyof T;
    value: unknown;
}
export declare const defaultValueHandler: <T extends Record<string, unknown>>(dataArray: T[], labelPath: string, valuePath: string, filterOptions?: FilterOptions<T>) => SelectDto[];
export declare const getNestedValue: (obj: Record<string, unknown>, path: string) => string;
export declare const filterAndMapToSelect: <T extends Record<string, unknown>>(dataArray: T[], config: {
    labelPath: string;
    valuePath: string;
    filter?: FilterOptions<T>;
}) => SelectDto[];
