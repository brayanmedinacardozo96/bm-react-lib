import React, { ReactNode } from "react";
export interface AppNavLiProps {
    key?: string;
    label: string;
    children: ReactNode;
}
declare const AppNavLi: React.FC<AppNavLiProps>;
export default AppNavLi;
