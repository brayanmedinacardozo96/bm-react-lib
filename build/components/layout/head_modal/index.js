import React from 'react';
const LayoutHeadModal = ({ title, children }) => {
    return (React.createElement("div", { className: "app-head-modal" },
        React.createElement("div", { className: "app-head-modal-panel" },
            React.createElement("h2", { className: "app-head-modal-title" }, title)),
        React.createElement("div", { className: "app-head-modal-right" }, children)));
};
export default LayoutHeadModal;
