import React, { ErrorInfo, ReactNode } from 'react';
interface ErrorBoundaryProps {
    children: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(_: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}
export default ErrorBoundary;
