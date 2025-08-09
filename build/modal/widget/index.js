import React from "react";
import "./modal.css";
const AppModal = ({ isOpen, onClose, title, children, actions, }) => {
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "app-modal-overlay" },
        React.createElement("div", { className: "app-modal-content" },
            React.createElement("div", { className: "app-modal-header" },
                title && React.createElement("h3", { className: "app-modal-title" }, title),
                onClose && (React.createElement("button", { className: "app-modal-close", onClick: onClose, "aria-label": "Cerrar" }, "\u00D7"))),
            React.createElement("div", { className: "app-modal-body" }, children),
            actions && React.createElement("div", { className: "app-modal-footer" }, actions))));
};
export default AppModal;
