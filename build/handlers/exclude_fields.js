export const excludeFields = (data, fieldsToExclude) => {
    if (!data)
        return {};
    const result = Object.assign({}, data);
    fieldsToExclude.forEach(field => {
        delete result[field];
    });
    return result;
};
