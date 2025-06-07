export const mapDefaultSelectValue = (labelPath, valuePath, data) => {
    var _a, _b;
    const label = (_a = labelPath.split('.').reduce((acc, key) => acc === null || acc === void 0 ? void 0 : acc[key], data)) !== null && _a !== void 0 ? _a : "";
    const value = (_b = valuePath.split('.').reduce((acc, key) => acc === null || acc === void 0 ? void 0 : acc[key], data)) !== null && _b !== void 0 ? _b : 0;
    return { label, value };
};
