import React from "react";
export interface AppPaginationProps {
    from: string;
    to: string;
    total: string;
    currentPage: string;
    lastPage: string;
    labelTotal?: string;
    labelOf?: string;
    labelPage?: string;
    childPrevious: JSX.Element | JSX.Element[];
    childNext: JSX.Element | JSX.Element[];
}
declare const AppPagination: React.FC<AppPaginationProps>;
export default AppPagination;
