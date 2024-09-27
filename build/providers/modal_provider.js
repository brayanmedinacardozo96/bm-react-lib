import React, { createContext, useReducer, useContext } from 'react';
const modalReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return Object.assign(Object.assign({}, state), { [action.modalName]: { isOpen: true, data: action.data } });
        case 'CLOSE_MODAL':
            return Object.assign(Object.assign({}, state), { [action.modalName]: { isOpen: false, data: action.data } });
        default:
            throw new Error(`Unhandled action type: ${action}`);
    }
};
const ModalContext = createContext(undefined);
export const ModalProvider = ({ children }) => {
    const [modalState, dispatch] = useReducer(modalReducer, {});
    const openModal = (modalName, data) => dispatch({ type: 'OPEN_MODAL', modalName, data });
    const closeModal = (modalName, data) => dispatch({ type: 'CLOSE_MODAL', modalName, data });
    return (React.createElement(ModalContext.Provider, { value: { modalState, openModal, closeModal } }, children));
};
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
