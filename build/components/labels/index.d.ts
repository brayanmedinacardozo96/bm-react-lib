import React from "react";
export interface UILabelProps {
    id?: string;
    text: string;
    htmlFor: string;
    className?: string;
}
declare const UILabel: React.FC<UILabelProps>;
export default UILabel;
