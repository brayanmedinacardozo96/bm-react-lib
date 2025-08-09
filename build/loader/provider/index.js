import React, { useState, } from 'react';
import { LoaderContext } from '../context';
export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);
    return (React.createElement(LoaderContext.Provider, { value: { isLoading, showLoader, hideLoader } }, children));
};
