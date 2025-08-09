import React, { useState, useMemo, useContext } from "react";
import { ModalContext } from "../context";
import AppModal from "../widget";
export const useGlobalModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx)
        throw new Error("useGlobalModal must be used within ModalProvider");
    return ctx;
};
export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({ isOpen: false });
    const showModal = (options) => {
        setModal(Object.assign(Object.assign({}, options), { isOpen: true }));
    };
    const hideModal = () => setModal(Object.assign(Object.assign({}, modal), { isOpen: false }));
    const value = useMemo(() => ({ showModal, hideModal }), [showModal, hideModal]);
    return (React.createElement(ModalContext.Provider, { value: value },
        children,
        React.createElement(AppModal, { isOpen: modal.isOpen, onClose: hideModal, title: modal.title, actions: modal.actions }, modal.content)));
};
