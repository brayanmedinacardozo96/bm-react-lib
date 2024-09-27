import React, { ReactNode } from "react";


export interface AppNavProps {
    brand: JSX.Element,
    children: ReactNode;

}

const AppNav: React.FC<AppNavProps> = ({ brand, children }) => {

    return (
        <header className="header" id="header">
            <nav className="navbar container">
                {brand}
                <div className="burger" id="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className="menu" id="menu">
                    {children}
                </div>
            </nav>
        </header>
    );


};

export default AppNav;