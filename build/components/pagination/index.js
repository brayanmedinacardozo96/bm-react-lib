import React from "react";
const AppPagination = (props) => {
    return (React.createElement("div", { className: "app-pagination", "aria-label": "Table navigation" },
        React.createElement("span", { className: "app-pagination-register" },
            "Registros",
            React.createElement("span", { className: "app-pagination-label" },
                props.from,
                " - ",
                props.to),
            " de",
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
