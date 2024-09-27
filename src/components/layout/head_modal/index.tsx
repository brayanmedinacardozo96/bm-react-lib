import React, { ReactNode } from 'react';

export interface LayoutHeadModalProps {
    title: string;
    children: ReactNode;
}

const LayoutHeadModal: React.FC<LayoutHeadModalProps> = ({ title, children }) => {
    return (
        <div className="app-head-modal">
            <div className="app-head-modal-panel">
                <h2 className="app-head-modal-title">
                    {title}
                </h2>
            </div>
            <div className="app-head-modal-right">
                {children}
            </div>
        </div>
    );
};

export default LayoutHeadModal;
