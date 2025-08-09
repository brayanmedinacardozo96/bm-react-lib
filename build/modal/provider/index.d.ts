import React, { type ReactNode } from "react";
import { type ModalState } from "../context";
export declare const useGlobalModal: () => {
    showModal: (options: Omit<ModalState, "isOpen">) => void;
    hideModal: () => void;
};
export declare const ModalProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
