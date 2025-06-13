export class HttpClient {
    constructor(private baseUrl: string, private token: string){}

    async request<T>(method: string, path: string, body?: any): Promise<T> {
        const result = await fetch(this.baseUrl + path, {
            method,
            headers: {
                "X-SPOD-ACCESS-TOKEN": this.token,
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : undefined
        });

        const text = await result.text();
        if (!result.ok) {
            throw new Error(`HTTP ${result.status}: ${text}`)
        }
        try {
            return JSON.parse(text);
        } catch {
            return text as T
        }
    }
}