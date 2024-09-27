import React from 'react';
import { useGenerateCode } from '../../utils/random_code';
const MenuItems = ({ items }) => {
    const _buildLabel = (label, to) => {
        const key = useGenerateCode();
        if (to) {
            return (React.createElement(React.Fragment, null, to));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { className: "dropdown", type: "checkbox", id: `dropdown-${key}`, name: "dropdown" }),
            React.createElement("label", { className: "for-dropdown", htmlFor: `dropdown-${key}` }, label)));
    };
    const _buildOption = (option) => {
        if (option.items) {
            return _buildSubItem(option.label, option.items);
        }
        const key = useGenerateCode();
        return React.createElement("a", { key: key, className: 'a' }, option.label);
    };
    const _buildDropdown = (items) => {
        if (items) {
            return React.createElement("div", { className: "section-dropdown" }, items.map((option) => _buildOption(option)));
        }
        return null;
    };
    const _buildItem = (items) => {
        return (React.createElement("ul", { className: "menu-inner" }, items.map((item, index) => (React.createElement("li", { key: index, className: "menu-item" },
            React.createElement("div", { className: "sec-center" },
                _buildLabel(item.label, item.to),
                _buildDropdown(item.items)))))));
    };
    const _buildSubItem = (label, items) => {
        const key = useGenerateCode();
        const keya = useGenerateCode();
        return React.createElement("a", { key: keya, className: "for-dropdown a" },
            React.createElement("input", { className: "dropdown", type: "checkbox", id: `dropdown-${key}`, name: `dropdown-${key}` }),
            React.createElement("label", { className: 'sub-label', htmlFor: `dropdown-${key}` },
                label,
                " "),
            React.createElement("div", { className: "section-dropdown" }, items.map((option) => _buildOption(option))));
    };
    return (React.createElement("ul", null, _buildItem(items)));
};
export default MenuItems;
