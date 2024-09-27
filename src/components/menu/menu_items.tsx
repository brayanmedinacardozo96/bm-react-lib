
import React from 'react';
import { useGenerateCode } from '../../utils/random_code'
import { MenuItemsType } from './types/menu_items';


// Definir las propiedades del componente MenuItems
export interface MenuItemsProps {
    items: MenuItemsType[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {


    const _buildLabel = (label: string, to?: JSX.Element) => {
        const key = useGenerateCode();
        if (to) {
            return (
                <>{to}</>
            )
        }
        return (
            <>
                <input className="dropdown" type="checkbox" id={`dropdown-${key}`} name="dropdown" />
                <label className="for-dropdown" htmlFor={`dropdown-${key}`}>
                    {label}
                </label>
            </>
        );
    };

    const _buildOption = (option: MenuItemsType) => {

        if (option.items) {
            return _buildSubItem(option.label, option.items)
        }

        const key = useGenerateCode();
        return <a key={key} className='a'>{option.label}</a>

        //return option.items.length > 0 ? _buildSubItem(option.label, option.items) : <a className='a'>{option.label}</a>

    }

    const _buildDropdown = (items?: MenuItemsType[]) => {
        if (items) {
            return <div className="section-dropdown">
                {items.map((option) => _buildOption(option))}
            </div>
        }
        return null;
    }

    // Método para construir los elementos del menú
    const _buildItem = (items: MenuItemsType[]) => {
        return (
            <ul className="menu-inner">
                {items.map((item, index) => (
                    <li key={index} className="menu-item">
                        <div className="sec-center">
                            {_buildLabel(item.label, item.to)}
                            {_buildDropdown(item.items)}
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const _buildSubItem = (label: string, items: MenuItemsType[]) => {
        const key = useGenerateCode();
        const keya = useGenerateCode();
        return <a key={keya} className="for-dropdown a" >
            <input className="dropdown" type="checkbox" id={`dropdown-${key}`} name={`dropdown-${key}`} />
            <label className='sub-label' htmlFor={`dropdown-${key}`}>{label} </label>
            <div className="section-dropdown">
                {items.map((option) => _buildOption(option))}
            </div>
        </a>
    }

    // Renderizar los elementos del menú
    return (
        <ul>
            {_buildItem(items)}
        </ul>
    );
}

export default MenuItems;
