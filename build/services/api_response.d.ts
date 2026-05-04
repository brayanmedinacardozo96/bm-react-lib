export interface Validations {
    [key: string]: string[];
}
export interface ApiResponse<T = undefined> {
    success: boolean;
    message: string;
    status: number;
    data: T;
    validations: Validations;
}
