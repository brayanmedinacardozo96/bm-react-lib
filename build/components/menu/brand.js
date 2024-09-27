import React from "react";
const AppBrand = (props) => {
    return (React.createElement("a", { href: "#", className: "brand" },
        props.logo ? React.createElement("img", { width: 24, height: 24, src: props.logo, alt: "background" }) : null,
        React.createElement("p", { className: "text-sm text-gray-600 font-heading ml-2" }, props.label)));
};
export default AppBrand;
