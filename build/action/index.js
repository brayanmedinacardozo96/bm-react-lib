var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function useCreateAction(send, config) {
    const { statusResponse, messageSuccess, messageError, notificationService, loaderService } = config;
    const action = (data) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            (_a = loaderService === null || loaderService === void 0 ? void 0 : loaderService.showLoader) === null || _a === void 0 ? void 0 : _a.call(loaderService);
            const response = yield send(data);
            const isSuccess = response.status === statusResponse;
            notificationService.showToast({
                success: isSuccess,
                message: isSuccess
                    ? messageSuccess !== null && messageSuccess !== void 0 ? messageSuccess : "Se ha guardado correctamente"
                    : messageError !== null && messageError !== void 0 ? messageError : "Error al guardar. Por favor, inténtelo de nuevo más tarde.",
            });
            return { success: isSuccess, status: response.status };
        }
        catch (error) {
            notificationService.showToast({
                success: false,
                message: messageError !== null && messageError !== void 0 ? messageError : "Error al guardar. Por favor, inténtelo de nuevo más tarde.",
            });
            return { success: false, error };
        }
        finally {
            (_b = loaderService === null || loaderService === void 0 ? void 0 : loaderService.hideLoader) === null || _b === void 0 ? void 0 : _b.call(loaderService);
        }
    });
    return { action };
}
