import React, { ReactNode } from "react";
import { MenuItemsType } from "./types/menu_items";
export interface AppMenuProps {
    items: MenuItemsType[];
    children: ReactNode;
}
declare const AppMenu: React.FC<AppMenuProps>;
export default AppMenu;
