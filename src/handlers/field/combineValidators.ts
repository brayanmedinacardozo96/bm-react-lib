export function combineValidators<T = unknown>(...validators: Array<(value: T) => string | undefined>) {
    return (value: T) => {
        for (const validator of validators) {
            const error = validator(value);
            if (error) return error;
        }
        return undefined;
    };
}