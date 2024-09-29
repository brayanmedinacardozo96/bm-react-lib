import React from "react";

export interface AppPaginationProps {
    from: string,
    to: string,
    total: string,
    currentPage: string,
    lastPage: string,
    labelTotal?: string
    labelOf?: string
    childPrevious: JSX.Element | JSX.Element[],
    childNext: JSX.Element | JSX.Element[],

}

const AppPagination: React.FC<AppPaginationProps> = (props) => {

    return (
        <div className="app-pagination" aria-label="Table navigation">
            <span className="app-pagination-register">
                {props.labelTotal ?? "Registros"}
                <span className="app-pagination-label">
                    {props.from} - {props.to}
                </span> {props.labelOf ?? "de"}
                <span className="app-pagination-label">
                    {props.total}
                </span>
            </span>
            <ul className="app-pagination-nav">
                <li>
                    {
                        props.childPrevious
                    }
                </li>
                <li>
                    <a href="#" className="app-pagination-page">
                        Página {props.currentPage} de {props.lastPage}
                    </a>
                </li>
                <li>
                    {
                        props.childNext
                    }
                </li>
            </ul>
        </div>
    )

}

export default AppPagination;


