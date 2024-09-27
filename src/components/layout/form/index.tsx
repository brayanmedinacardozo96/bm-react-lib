import React, { ReactNode } from 'react';

export interface LayoutFormProps {
    className?: string
    children: ReactNode;
}

const LayoutForm: React.FC<LayoutFormProps> = ({ className = 'h-100', children }) => {
    return (
        <div className={`space-y-12 ${className}`} >
            <div className="border-b border-gray-900/10 pb-12">
                {children}
            </div>
        </div>
    );
};

export default LayoutForm;
