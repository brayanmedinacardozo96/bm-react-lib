import { useCallback } from 'react';

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

export const useValidation = <T>() => {
    const validate = useCallback((values: T, requiredFields: (keyof T)[]): ValidationErrors<T> => {
        const errors: ValidationErrors<T> = {};
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = 'Required';
            }
        });
        return errors;
    }, []);

    return { validate };
};

