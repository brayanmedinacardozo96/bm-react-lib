import React from "react";
import { LoaderContextProps } from "../../providers/loader_provider";
export interface AppButtonProps {
    context: LoaderContextProps;
    className?: string;
    text?: string;
    onClick?: () => void;
    child: string | JSX.Element | JSX.Element[];
}
declare const AppButton: React.FC<AppButtonProps>;
export default AppButton;
