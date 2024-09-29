import React from "react";
const AppPagination = (props) => {
    var _a, _b;
    return (React.createElement("div", { className: "app-pagination", "aria-label": "Table navigation" },
        React.createElement("span", { className: "app-pagination-register" }, (_a = props.labelTotal) !== null && _a !== void 0 ? _a : "Registros",
            React.createElement("span", { className: "app-pagination-label" },
                props.from,
                " - ",
                props.to),
            " ", (_b = props.labelOf) !== null && _b !== void 0 ? _b : "de",
            React.createElement("span", { className: "app-pagination-label" }, props.total)),
        React.createElement("ul", { className: "app-pagination-nav" },
            React.createElement("li", null, props.childPrevious),
            React.createElement("li", null,
                React.createElement("a", { href: "#", className: "app-pagination-page" },
                    "P\u00E1gina ",
                    props.currentPage,
                    " de ",
                    props.lastPage)),
            React.createElement("li", null, props.childNext))));
};
export default AppPagination;
