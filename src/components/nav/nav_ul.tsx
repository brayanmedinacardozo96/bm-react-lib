import React, { ReactNode } from "react";


export interface AppNavUlProps {
    children: ReactNode;

}

const AppNavUl: React.FC<AppNavUlProps> = ({ children }) => {
    return (
        <ul className="menu-inner">
            {children}
        </ul>
    );
};

export default AppNavUl;