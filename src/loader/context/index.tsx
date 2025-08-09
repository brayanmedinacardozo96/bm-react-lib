import { createContext } from "react";
import { LoaderContextProps } from "../../types";

export const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);