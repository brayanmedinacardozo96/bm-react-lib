import React from "react";
import "./modal.css";
export interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
}
declare const AppModal: React.FC<ModalProps>;
export default AppModal;
