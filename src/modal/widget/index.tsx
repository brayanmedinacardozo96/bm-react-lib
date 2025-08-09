import React from "react";
import "./modal.css";

export interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
}

const AppModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    actions,
}) => {
    if (!isOpen) return null;

    return (
        <div className="app-modal-overlay">
            <div className="app-modal-content">
                <div className="app-modal-header">
                    {title && <h3 className="app-modal-title">{title}</h3>}
                    {onClose && (
                        <button className="app-modal-close" onClick={onClose} aria-label="Cerrar">
                            ×
                        </button>
                    )}
                </div>
                <div className="app-modal-body">{children}</div>
                {actions && <div className="app-modal-footer">{actions}</div>}
            </div>
        </div>
    );
};

export default AppModal;