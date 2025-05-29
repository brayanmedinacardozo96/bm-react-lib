import React, { ReactNode } from "react";
import "./alert.css";
export type AlertType = "info" | "success" | "warning" | "error";
export interface AlertProps {
    type?: AlertType;
    children: ReactNode;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
