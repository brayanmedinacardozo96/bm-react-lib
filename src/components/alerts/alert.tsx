import React, { ReactNode } from "react";
import "./alert.css";

export type AlertType = "info" | "success" | "warning" | "error";

export interface AlertProps {
  type?: AlertType;
  children: ReactNode;
}

const icons: Record<AlertType, JSX.Element> = {
  info: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M16.7 5.3a1 1 0 0 0-1.4 0L8 12.59 4.7 9.3a1 1 0 1 0-1.4 1.4l4 4a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0 0-1.4Z" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.516 11.607c.75 1.337-.213 3.045-1.743 3.045H3.484c-1.53 0-2.493-1.708-1.743-3.045L8.257 3.1Zm1.743 4.4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm0 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Zm1 15H9v-2h2v2Zm0-4H9V5h2v6Z" />
    </svg>
  ),
};

const Alert: React.FC<AlertProps> = ({ type = "info", children }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <span className="alert-icon">{icons[type]}</span>
      <div className="alert-content">{children}</div>
    </div>
  );
};

export default Alert;
