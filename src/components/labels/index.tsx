import React from "react";

export interface UILabelProps {
    id?: string;
    text: string;
    htmlFor: string;
    className?: string
}

const UILabel: React.FC<UILabelProps> = (props) => {
    return (
        <label
            // style={{ top: "-8px", left: '10px' }}
            id={props.id}
            htmlFor={props.htmlFor}
            className={props.className ?? 'text-xs text-gray-900'} //absolute bg-white
        >
            {props.text}
        </label>
    );
}

export default UILabel;