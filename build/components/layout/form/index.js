import React from 'react';
const LayoutForm = ({ className = 'h-100', children }) => {
    return (React.createElement("div", { className: `space-y-12 ${className}` },
        React.createElement("div", { className: "border-b border-gray-900/10 pb-12" }, children)));
};
export default LayoutForm;
