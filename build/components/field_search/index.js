var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
const FieldSearch = (_a) => {
    var { label = "Search", bgColorClass = "bg-slate-800" } = _a, props = __rest(_a, ["label", "bgColorClass"]);
    return (React.createElement("div", { title: "Presiona Enter para buscar", className: "relative" },
        props.child,
        React.createElement("button", { className: `absolute top-1 right-1 flex items-center rounded ${bgColorClass} py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`, onClick: props.onClick, type: "button" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className: "w-4 h-4 mr-1.5" },
                React.createElement("path", { fillRule: "evenodd", d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z", clipRule: "evenodd" })),
            label)));
};
export default FieldSearch;
