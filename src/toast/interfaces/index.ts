export interface ToastNotification {
    success: boolean;
    message: string;
}

export interface NotificationService {
    showToast: (notification: ToastNotification) => void;
}
