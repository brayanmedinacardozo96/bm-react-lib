export * from './api_response';
interface RequestConfig {
    method: string;
    headers: {
        [key: string]: string;
    };
    body?: string | FormData;
}
interface Parsers<T> {
    [key: string]: (data: unknown) => T;
}
type HttpClient = (url: string, config: RequestConfig) => Promise<Response>;
export declare const useApiClient: (httpClient?: HttpClient) => {
    get: <T>(route: string, type?: string, body?: unknown, parsers?: Parsers<T>) => Promise<T>;
    getToken: <T>(route: string, type?: string, body?: unknown, parsers?: Parsers<T>, hardToken?: string) => Promise<T>;
    post: <T>(route: string, body?: unknown, type?: string, parsers?: Parsers<T>) => Promise<T>;
    put: <T>(route: string, body?: unknown, type?: string, parsers?: Parsers<T>) => Promise<T>;
    patch: <T>(route: string, body?: unknown, type?: string, parsers?: Parsers<T>) => Promise<T>;
    delete: <T>(route: string, body?: unknown, type?: string, parsers?: Parsers<T>) => Promise<T>;
};
