
import React, { useState, type ReactNode, useMemo, useContext } from "react";
import { ModalContext, type ModalState } from "../context";
import AppModal from "../widget";


export const useGlobalModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("useGlobalModal must be used within ModalProvider");
    return ctx;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<ModalState>({ isOpen: false });

    const showModal = (options: Omit<ModalState, "isOpen">) => {
        setModal({ ...options, isOpen: true });
    };

    const hideModal = () => setModal({ ...modal, isOpen: false });
    const value = useMemo(() => ({ showModal, hideModal }), [showModal, hideModal]);

    return (
        <ModalContext.Provider value={value}>
            {children}
            <AppModal
                isOpen={modal.isOpen}
                onClose={hideModal}
                title={modal.title}
                actions={modal.actions}
            >
                {modal.content}
            </AppModal>
        </ModalContext.Provider>
    );
};