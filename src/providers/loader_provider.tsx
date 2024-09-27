import React, { useState, useContext, ReactNode, Context } from 'react';

export interface LoaderContextProps {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

export const LoaderProvider: React.FC<{ children: ReactNode; context: Context<LoaderContextProps | undefined> }> = ({ children, context }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <context.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </context.Provider>
    );
};

export const useLoader = (LoaderContext: Context<LoaderContextProps | undefined>): LoaderContextProps => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};
