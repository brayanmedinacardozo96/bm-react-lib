import React, { ReactNode } from "react";
import MenuItems from "./menu_items";
import { MenuItemsType } from "./types/menu_items";

export interface AppMenuProps {
    items: MenuItemsType[]
    children: ReactNode;

}

const AppMenu: React.FC<AppMenuProps> = ({ items, children }) => {

    return (
        <header className="header" id="header">
            <nav className="navbar container">
                {children}
                <div className="burger" id="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className="menu" id="menu">
                    <MenuItems items={items}></MenuItems>
                </div>
                <button className="switch" id="switch">
                    <i className="switch-light bx bx-sun">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M12 2V4" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M12 20V22" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M4 12L2 12" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M22 12L20 12" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                            <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" />
                        </svg>
                    </i>
                    <i className="switch-dark bx bx-moon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> </g></svg>
                    </i>
                </button>
            </nav>
        </header>
    );


};

export default AppMenu;