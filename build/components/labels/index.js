import React from "react";
const UILabel = (props) => {
    var _a;
    return (React.createElement("label", { id: props.id, htmlFor: props.htmlFor, className: (_a = props.className) !== null && _a !== void 0 ? _a : 'text-xs' }, props.text));
};
export default UILabel;
