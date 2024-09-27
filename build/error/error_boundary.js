import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Error caught in Error Boundary: ", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return React.createElement("h1", null, "Something went wrong.");
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
