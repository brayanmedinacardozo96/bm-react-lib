import React from 'react';
import { MenuItemsType } from './types/menu_items';
export interface MenuItemsProps {
    items: MenuItemsType[];
}
declare const MenuItems: React.FC<MenuItemsProps>;
export default MenuItems;
