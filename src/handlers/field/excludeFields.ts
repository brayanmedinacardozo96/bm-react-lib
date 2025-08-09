export const excludeFields = (data: any, fieldsToExclude: string[]) => {
    if (!data) return {};

    const result = { ...data };
    fieldsToExclude.forEach(field => {
        delete result[field];
    });

    return result;
};