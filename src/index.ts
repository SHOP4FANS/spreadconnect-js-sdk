import { ApiService } from "./service/api.js";
import { ARTICLES_PATH } from "./spod-endpoints.js";
import { Article, Pagination } from "./types/spod-types.js";

export class Spreadconnect {

    private apiService: ApiService;

    constructor({ baseUrl, token }: { baseUrl: string, token: string }) {

        if (!baseUrl) {
            throw new Error("Base url is missing");
        }

        if (!token) {
            throw new Error("Access token is missing");
        }

        this.apiService = new ApiService({ baseUrl, token });
    }

    public async GetAllArticles() {
        return await this.apiService.SendRequest<Pagination<Article>>({ method: "GET", path: ARTICLES_PATH });
    }
}