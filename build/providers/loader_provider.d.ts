import React, { ReactNode, Context } from 'react';
export interface LoaderContextProps {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}
export declare const LoaderProvider: React.FC<{
    children: ReactNode;
    context: Context<LoaderContextProps | undefined>;
}>;
export declare const useLoader: (LoaderContext: Context<LoaderContextProps | undefined>) => LoaderContextProps;
