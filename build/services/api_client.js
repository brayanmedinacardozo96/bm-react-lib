var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from 'react';
export * from './api_response';
export const useApiClient = (httpClient = fetch) => {
    const req = useCallback((method_1, route_1, body_1, ...args_1) => __awaiter(void 0, [method_1, route_1, body_1, ...args_1], void 0, function* (method, route, body, type = 'application/json', parsers = {}, hardToken = '') {
        const requestConfig = {
            method,
            headers: {
                'Content-Type': type,
                'Accept': type,
            },
        };
        if (hardToken) {
            requestConfig.headers['Authorization'] = `Bearer ${hardToken}`;
        }
        if (body && type === 'application/json') {
            requestConfig.body = JSON.stringify(body);
        }
        else if (body) {
            requestConfig.body = body;
        }
        try {
            const response = yield httpClient(route, requestConfig);
            let responseBody;
            if (type === 'application/pdf') {
                responseBody = (yield response.blob());
            }
            else {
                responseBody = yield response.json();
            }
            if (Object.keys(parsers).length === 0) {
                return responseBody;
            }
            return responseBody;
        }
        catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }), [httpClient]);
    const client = {
        get: (route, type, body, parsers) => req('GET', route, body, type, parsers),
        getToken: (route, type, body, parsers, hardToken) => req('GET', route, body, type, parsers, hardToken),
        post: (route, body, type, parsers) => req('POST', route, body, type, parsers),
        put: (route, body, type, parsers) => req('PUT', route, body, type, parsers),
        patch: (route, body, type, parsers) => req('PATCH', route, body, type, parsers),
        delete: (route, body, type, parsers) => req('DELETE', route, body, type, parsers),
    };
    return client;
};
