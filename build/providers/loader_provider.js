import React, { useState, useContext } from 'react';
export const LoaderProvider = ({ children, context }) => {
    const [isLoading, setIsLoading] = useState(false);
    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);
    return (React.createElement(context.Provider, { value: { isLoading, showLoader, hideLoader } }, children));
};
export const useLoader = (LoaderContext) => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};
