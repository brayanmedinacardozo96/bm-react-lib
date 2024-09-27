type ValidationErrors<T> = Partial<Record<keyof T, string>>;
declare const useValidation: <T>() => {
    validate: (values: T, requiredFields: (keyof T)[]) => ValidationErrors<T>;
};
export default useValidation;
