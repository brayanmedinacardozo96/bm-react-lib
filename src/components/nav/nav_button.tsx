
import React, { ReactNode } from "react";

export interface AppNavButtonProps {
    className: string
    children: ReactNode;

}

const AppNavButton: React.FC<AppNavButtonProps> = ({ className, children }) => {
    return (
        <button className={className} >
            {children}
        </button>
    );
};

export default AppNavButton;
