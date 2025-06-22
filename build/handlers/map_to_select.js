export const mapToSelectDto = (dataArray, labelPath, valuePath) => {
    if (!Array.isArray(dataArray)) {
        return [];
    }
    return dataArray.map(item => {
        var _a, _b;
        const label = (_a = labelPath.split('.').reduce((acc, key) => acc && acc[key], item)) !== null && _a !== void 0 ? _a : "";
        const value = (_b = valuePath.split('.').reduce((acc, key) => acc && acc[key], item)) !== null && _b !== void 0 ? _b : "0";
        return {
            label: String(label),
            value: String(value)
        };
    });
};
