import { createContext, type ReactNode } from "react";

export type ModalState = {
    isOpen: boolean;
    title?: string;
    content?: ReactNode;
    actions?: ReactNode;
};

type ModalContextType = {
    showModal: (options: Omit<ModalState, "isOpen">) => void;
    hideModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);