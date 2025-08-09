export function combineValidators(...validators) {
    return (value) => {
        for (const validator of validators) {
            const error = validator(value);
            if (error)
                return error;
        }
        return undefined;
    };
}
