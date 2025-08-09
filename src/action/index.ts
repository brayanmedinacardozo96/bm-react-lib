import { LoaderService } from "../loader/interfaces/indext";
import { NotificationService } from "../toast/interfaces";

export interface ActionsDependencies {
    notificationService: NotificationService;
    loaderService: LoaderService;
}

export type SaveResult = {
    success: boolean;
    status?: number;
    error?: unknown;
};

export type CreateFn<T = unknown> = (data: T) => Promise<{ status: number }>;

export interface ActionsHandlerConfig extends ActionsDependencies {
    statusResponse: number;
    messageSuccess?: string;
    messageError?: string;
}

// Versión pura para biblioteca (sin hooks)
export function useCreateAction<T = unknown>(
    send: CreateFn<T>,
    config: ActionsHandlerConfig
) {
    const {
        statusResponse,
        messageSuccess,
        messageError,
        notificationService,
        loaderService
    } = config;

    const action = async (data: T): Promise<SaveResult> => {
        try {
            loaderService?.showLoader?.();
            const response = await send(data);
            const isSuccess = response.status === statusResponse;

            notificationService.showToast({
                success: isSuccess,
                message: isSuccess
                    ? messageSuccess ?? "Se ha guardado correctamente"
                    : messageError ?? "Error al guardar. Por favor, inténtelo de nuevo más tarde.",
            });

            return { success: isSuccess, status: response.status };
        } catch (error) {
            notificationService.showToast({
                success: false,
                message: messageError ?? "Error al guardar. Por favor, inténtelo de nuevo más tarde.",
            });
            return { success: false, error };
        } finally {
            loaderService?.hideLoader?.();
        }
    };

    return { action };
}