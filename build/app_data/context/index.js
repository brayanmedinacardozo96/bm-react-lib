import React, { createContext, useContext, useState } from 'react';
const AppDataContext = createContext(undefined);
export const AppDataProvider = ({ children }) => {
    const [ctxId, setContextId] = useState(null);
    const [ctxData, setContextData] = useState(null);
    return (React.createElement(AppDataContext.Provider, { value: { ctxId, ctxData, setContextId, setContextData } }, children));
};
export const useAppDataContext = () => {
    const context = useContext(AppDataContext);
    if (!context)
        throw new Error('useIdContext must be used within an IdProvider');
    return context;
};
