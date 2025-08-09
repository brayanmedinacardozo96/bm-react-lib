export type ValidationErrors<T> = Partial<Record<keyof T, string>>;
export declare const useValidation: <T>() => {
    validate: (values: T, requiredFields: (keyof T)[]) => ValidationErrors<T>;
};
