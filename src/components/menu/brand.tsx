import React from "react";

export interface AppBrandProps {
    label: string
    logo?: string
}

const AppBrand: React.FC<AppBrandProps> = (props) => {
    return (
        <a href="#" className="brand">
            {props.logo ? <img width={24} height={24} src={props.logo} alt="background" /> : null}
            <p className="text-sm text-gray-600 font-heading ml-2">{props.label}</p>
        </a>
    )
};

export default AppBrand;