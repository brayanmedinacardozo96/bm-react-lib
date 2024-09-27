import React, { ReactNode } from "react";
export interface AppNavProps {
    brand: JSX.Element;
    children: ReactNode;
}
declare const AppNav: React.FC<AppNavProps>;
export default AppNav;
