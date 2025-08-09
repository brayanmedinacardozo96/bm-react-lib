export const defaultValueHandler = (dataArray, labelPath, valuePath, filterOptions) => {
    let filteredData = dataArray;
    if (filterOptions) {
        const { key, value } = filterOptions;
        filteredData = dataArray.filter((item) => item[key] === value);
    }
    return filteredData.map((item) => ({
        label: getNestedValue(item, labelPath),
        value: getNestedValue(item, valuePath),
    }));
};
export const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => {
        return current && typeof current === 'object'
            ? current[key]
            : '';
    }, obj);
};
export const filterAndMapToSelect = (dataArray, config) => {
    return defaultValueHandler(dataArray, config.labelPath, config.valuePath, config.filter);
};
