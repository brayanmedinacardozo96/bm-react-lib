import React from "react";
import { LoaderContextProps } from "../../providers/loader_provider";
export interface SearchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    context: LoaderContextProps;
    label?: string;
    onClick?: () => void;
    bgColorClass?: string;
    child: string | JSX.Element | JSX.Element[];
}
declare const FieldSearch: React.FC<SearchButtonProps>;
export default FieldSearch;
