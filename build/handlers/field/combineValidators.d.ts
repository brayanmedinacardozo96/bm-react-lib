export declare function combineValidators<T = unknown>(...validators: Array<(value: T) => string | undefined>): (value: T) => string | undefined;
