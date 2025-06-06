import { ARTICLES_PATH } from "./spod-endpoints.js";
import { ArticlesApi, SenderProps } from "./types/sdk-types.js";
import { ArticleCreation, CreateArticleResponse, DeleteArticleParams, DeleteSingleArticleResponse, GetArticleParams, GetArticlesResponse, GetSingleArticleResponse } from "./types/spod-types.js";

/**
 * The Spreadconnect class provides methods to interact with the Spreadconnect API.
 * It requires a base URL and an access token for authentication.
 */
export class Spreadconnect {
    private baseUrl: string;
    private token: string;

    articles: ArticlesApi;

    constructor({ baseUrl, token }: { baseUrl: string, token: string }) {
        this.token = token;
        this.baseUrl = baseUrl;

        this.articles = this.createArticleApi();
    }

    private async SendRequest<T>({ method, path, body }: SenderProps): Promise<T> {
        try {
            const res = await fetch(this.baseUrl + path, {
                method,
                headers: {
                    "X-SPOD-ACCESS-TOKEN": this.token
                },
                body
            });

            const text = await res.text();

            if (this.isJson(text)) {
                return JSON.parse(text);
            } else {
                return text as T;
            }
        } catch (e) {
            console.error(e);
            throw new Error();
        }
    }

    private isJson(str: string): boolean {
        try {
            JSON.parse(str);
            return true;
        } catch {
            return false;
        }
    }

    private createArticleApi(): ArticlesApi {
        return {
            list: () => this.SendRequest<GetArticlesResponse>({ method: "GET", path: ARTICLES_PATH }),
            get: (props: GetArticleParams) => this.SendRequest<GetSingleArticleResponse>({
                method: "GET",
                path: ARTICLES_PATH + `/${props.articleId}`
            }),
            create: (props: ArticleCreation) => this.SendRequest<CreateArticleResponse>({
                method: "POST",
                path: ARTICLES_PATH,
                body: JSON.stringify(props)
            }),
            delete: (props: DeleteArticleParams) => this.SendRequest<DeleteSingleArticleResponse>({
                method: "DELETE",
                path: ARTICLES_PATH + `/${props.articleId}`
            })
        }
    }
}