import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type AppDataContextType = {
    ctxId: string | null;
    ctxData: unknown | null;
    setContextId: (id: string) => void;
    setContextData: (data: unknown | null) => void;
};

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
    const [ctxId, setContextId] = useState<string | null>(null);
    const [ctxData, setContextData] = useState<unknown | null>(null);

    return (
        <AppDataContext.Provider value={{ ctxId, ctxData, setContextId, setContextData }}>
            {children}
        </AppDataContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppDataContext = () => {
    const context = useContext(AppDataContext);
    if (!context) throw new Error('useIdContext must be used within an IdProvider');
    return context;
};