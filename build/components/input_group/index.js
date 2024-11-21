import React from 'react';
const InputGroup = ({ onClick, prefixIcon, suffixIcon, children }) => {
    const _buildPrefixIcon = () => {
        if (prefixIcon) {
            React.createElement("div", { className: "app-prefix-group" }, prefixIcon);
        }
        return null;
    };
    const _buildSuffixIcon = (prefixIcon) => {
        if (prefixIcon) {
            return prefixIcon;
        }
        return React.createElement("svg", { className: "shrink-0 size-4", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement("circle", { cx: "11", cy: "11", r: "8" }),
            React.createElement("path", { d: "m21 21-4.3-4.3" }));
    };
    return (React.createElement("div", { className: "app-panel-group" },
        _buildPrefixIcon(),
        children,
        React.createElement("div", { className: "app-second-panel-group" },
            React.createElement("button", { onClick: onClick, type: "button", className: "app-suffix-group" }, _buildSuffixIcon(suffixIcon)))));
};
export default InputGroup;
