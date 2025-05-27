import React from "react";
export interface SearchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick?: () => void;
    bgColorClass?: string;
    child: string | JSX.Element | JSX.Element[];
}
declare const FieldSearch: React.FC<SearchButtonProps>;
export default FieldSearch;
