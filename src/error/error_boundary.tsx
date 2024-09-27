import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        // Actualiza el estado para que el próximo renderizado muestre la UI de repuesto
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Puedes enviar el error a un servicio de reporte de errores, si es necesario
        console.error("Error caught in Error Boundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar cualquier UI de repuesto
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
