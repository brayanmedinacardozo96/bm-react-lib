import React, { ReactNode } from 'react';
export interface InputGroupProps {
    onClick: () => void;
    prefixIcon?: JSX.Element | JSX.Element[];
    suffixIcon?: JSX.Element | JSX.Element[];
    children: ReactNode;
}
declare const InputGroup: React.FC<InputGroupProps>;
export default InputGroup;
