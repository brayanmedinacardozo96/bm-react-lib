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
export type CreateFn<T = unknown> = (data: T) => Promise<{
    status: number;
}>;
export interface ActionsHandlerConfig extends ActionsDependencies {
    statusResponse: number;
    messageSuccess?: string;
    messageError?: string;
}
export declare function useCreateAction<T = unknown>(send: CreateFn<T>, config: ActionsHandlerConfig): {
    action: (data: T) => Promise<SaveResult>;
};
