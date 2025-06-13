import { ApiResponse } from "../types/sdk-types";

export class HttpClient {
    constructor(private baseUrl: string, private token: string){}

    async request<T>(method: string, path: string, body?: any): Promise<ApiResponse<T>> {
        const result = await fetch(this.baseUrl + path, {
            method,
            headers: {
                "X-SPOD-ACCESS-TOKEN": this.token,
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : undefined
        });

        const text = await result.text();
        let data: T | undefined = undefined;
        try {
            data = text ? JSON.parse(text) : undefined
        } catch {}
        return {
            status: result.status,
            data,
            rawBody: text
        };
    }
}