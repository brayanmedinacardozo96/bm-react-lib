import { useCallback } from 'react';
export const useValidation = () => {
    const validate = useCallback((values, requiredFields) => {
        const errors = {};
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = 'Required';
            }
        });
        return errors;
    }, []);
    return { validate };
};
