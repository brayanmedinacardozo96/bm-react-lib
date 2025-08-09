import { useContext } from "react";
import { LoaderContextProps } from "../../types";
import { LoaderContext } from "../context";

export const useLoader = (): LoaderContextProps => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};