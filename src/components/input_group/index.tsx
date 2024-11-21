import React, { ReactNode } from 'react';

export interface InputGroupProps {
    onClick: () => void
    prefixIcon?: JSX.Element | JSX.Element[],
    suffixIcon?: JSX.Element | JSX.Element[],
    children: ReactNode;
}

/**
 * Si utiliza prefixIcon poner en la clase del children: pl-7
 * Si utiliza suffixIcon poner en la clase del children: pr-10
 * @param onClick evento del icono derecho
 * @param prefixIcon icono del lado izquierdo
 * @param suffixIcon icono del lado derecho
 * @param children Input
 * @returns 
 */
const InputGroup: React.FC<InputGroupProps> = ({ onClick, prefixIcon, suffixIcon, children }) => {

    const _buildPrefixIcon = () => {
        if (prefixIcon) {
            <div className="app-prefix-group">
                {prefixIcon}
            </div>
        }
        return null;
    }

    const _buildSuffixIcon = (prefixIcon?: JSX.Element | JSX.Element[]) => {
        if (prefixIcon) {
            return prefixIcon;
        }
        return <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
        </svg>;
    }


    return (
        <div className="app-panel-group">
            {_buildPrefixIcon()}
            {children}
            <div className="app-second-panel-group">
                <button onClick={onClick} type="button" className="app-suffix-group">
                    {_buildSuffixIcon(suffixIcon)}
                </button>
            </div>
        </div>
    );
};

export default InputGroup;