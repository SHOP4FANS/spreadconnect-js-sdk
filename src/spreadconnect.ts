import { HttpClient } from "./http/http-client.js";
import { ArticlesApi } from "./api/articles-api.js";

export class Spreadconnect {
    public articles: ArticlesApi;

    constructor({baseUrl, token}: {baseUrl: string, token: string}) {
        const client = new HttpClient(baseUrl, token)
        this.articles = new ArticlesApi(client);
    }
}