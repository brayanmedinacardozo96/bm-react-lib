import React, { ReactNode } from "react";
import { useGenerateCode } from "../../utils/random_code";


export interface AppNavLiProps {
    key?: string
    label: string,
    children: ReactNode;

}

const AppNavLi: React.FC<AppNavLiProps> = ({ key = useGenerateCode(), label, children }) => {

    return (

        <li key={key} className="menu-item">
            <div className="sec-center">
                <input className="dropdown" type="checkbox" id={`dropdown-${key}`} name="dropdown" />
                <label className="for-dropdown" htmlFor={`dropdown-${key}`}>
                    {label}
                </label>
                <div className="section-dropdown">
                    {children}
                </div>
            </div>
        </li>

    );


};

export default AppNavLi;