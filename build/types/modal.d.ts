export interface ModalState {
    isOpen: boolean;
    data?: any;
}
export interface ModalContextProps {
    modalState: {
        [key: string]: ModalState;
    };
    openModal: (modalName: string, data?: any) => void;
    closeModal: (modalName: string, data?: any) => void;
}
