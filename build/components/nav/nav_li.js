import React from "react";
import { useGenerateCode } from "../../utils/random_code";
const AppNavLi = ({ key = useGenerateCode(), label, children }) => {
    return (React.createElement("li", { key: key, className: "menu-item" },
        React.createElement("div", { className: "sec-center" },
            React.createElement("input", { className: "dropdown", type: "checkbox", id: `dropdown-${key}`, name: "dropdown" }),
            React.createElement("label", { className: "for-dropdown", htmlFor: `dropdown-${key}` }, label),
            React.createElement("div", { className: "section-dropdown" }, children))));
};
export default AppNavLi;
