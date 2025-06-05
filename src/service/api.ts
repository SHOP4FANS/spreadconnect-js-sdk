import { SenderProps } from "../types/spod-types.js";

export class ApiService {

    private baseUrl: string;
    private token: string;

    constructor({ baseUrl, token }: { baseUrl: string, token: string }) {

        if (!baseUrl) {
            throw new Error("Base url is missing");
        }

        if (!token) {
            throw new Error("Access token is missing");
        }

        this.baseUrl = baseUrl;
        this.token = token;
    }

    public async SendRequest<T>({ method, path, body }: SenderProps): Promise<T> {
        try {
            const res = await fetch(this.baseUrl + path, {
                method,
                headers: {
                    "X-SPOD-ACCESS-TOKEN": this.token
                },
                body
            });
            return await res.json() as T;
        } catch (e) {
            console.error(e);
            throw new Error();
        }
    }
}