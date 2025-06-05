import { ApiService } from "./service/api.js";
import { ARTICLES_PATH } from "./spod-endpoints.js";
import { ArticleCreation, CreateArticleResponse, DeleteSingleArticleResponse, GetArticlesResponse, GetSingleArticleResponse } from "./types/spod-types.js";

/**
 * The Spreadconnect class provides methods to interact with the Spreadconnect API.
 * It requires a base URL and an access token for authentication.
 */
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

    /**
     * Retrieves a paginated list of all articles from the server.
     */
    public async GetAllArticles() {
        return await this.apiService.SendRequest<GetArticlesResponse>({ method: "GET", path: ARTICLES_PATH });
    }

    /**
     * Creates a new article with the provided data.
     *
     * @param props - The article creation payload including title, content, etc.
     */
    public async CreateArticle(props: ArticleCreation) {
        return await this.apiService.SendRequest<CreateArticleResponse>({
            method: "POST",
            path: ARTICLES_PATH,
            body: JSON.stringify(props)
        });
    }

    /**
     * Retrieves the details of a single article by its ID.
     *
     * @param articleId - The ID of the article to retrieve.
     */
    public async GetSingleArticle(articleId: string) {
        return await this.apiService.SendRequest<GetSingleArticleResponse>({
            method: "GET",
            path: ARTICLES_PATH + `/${articleId}`
        });
    }

    /**
     * Deletes a single article by its ID.
     *
     * @param articleId - The ID of the article to delete.
     */
    public async DeleteSingleArticle(articleId: string) {
        return await this.apiService.SendRequest<DeleteSingleArticleResponse>({
            method: "DELETE",
            path: ARTICLES_PATH + `/${articleId}`
        });
    }
}