import React from "react";

interface SearchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick?: () => void,
    bgColorClass?: string,
    child: string | JSX.Element | JSX.Element[],
}

const FieldSearch: React.FC<SearchButtonProps> = ({ label = "Search", bgColorClass = "bg-slate-800", ...props }) => (
    <div title="Presiona Enter para buscar" className="relative">
        {props.child}
        <button
            className={`absolute top-1 right-1 flex items-center rounded ${bgColorClass} py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            onClick={props.onClick}
            type="button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 mr-1.5"
            >
                <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                />
            </svg>
            {label}
        </button>
    </div>
);

export default FieldSearch;