import React from "react";
const AppNav = ({ brand, children }) => {
    return (React.createElement("header", { className: "header", id: "header" },
        React.createElement("nav", { className: "navbar container" },
            brand,
            React.createElement("div", { className: "burger", id: "burger" },
                React.createElement("span", { className: "burger-line" }),
                React.createElement("span", { className: "burger-line" }),
                React.createElement("span", { className: "burger-line" })),
            React.createElement("div", { className: "menu", id: "menu" }, children))));
};
export default AppNav;
