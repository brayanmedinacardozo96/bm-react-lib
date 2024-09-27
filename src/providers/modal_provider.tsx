import React, { createContext, useReducer, useContext, ReactNode } from 'react';

export interface ModalState {
    isOpen: boolean;
    data?: any;
}

export interface ModalContextProps {
    modalState: { [key: string]: ModalState };
    openModal: (modalName: string, data?: any) => void;
    closeModal: (modalName: string, data?: any) => void;
}

type ModalAction =
    | { type: 'OPEN_MODAL'; modalName: string; data?: any }
    | { type: 'CLOSE_MODAL'; modalName: string; data?: any };

const modalReducer = (state: { [key: string]: ModalState }, action: ModalAction): { [key: string]: ModalState } => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, [action.modalName]: { isOpen: true, data: action.data } };
        case 'CLOSE_MODAL':
            return { ...state, [action.modalName]: { isOpen: false, data: action.data } };
        default:
            throw new Error(`Unhandled action type: ${action}`);
    }
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalState, dispatch] = useReducer(modalReducer, {});

    const openModal = (modalName: string, data?: any) => dispatch({ type: 'OPEN_MODAL', modalName, data });
    const closeModal = (modalName: string, data?: any) => dispatch({ type: 'CLOSE_MODAL', modalName, data });

    return (
        <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
