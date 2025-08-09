import React, { type ReactNode } from 'react';
export type AppDataContextType = {
    ctxId: string | null;
    ctxData: unknown | null;
    setContextId: (id: string) => void;
    setContextData: (data: unknown | null) => void;
};
export declare const AppDataProvider: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
export declare const useAppDataContext: () => AppDataContextType;
