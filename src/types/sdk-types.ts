import { ArticleCreation, CreateArticleResponse, DeleteArticleParams, DeleteSingleArticleResponse, GetArticleParams, GetArticlesResponse, GetSingleArticleResponse } from "./spod-types.js";

export type SenderProps = {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    path: string,
    body?: string | FormData
};

export interface ArticlesApi {
    list: () => Promise<GetArticlesResponse>;
    get: (props: GetArticleParams) => Promise<GetSingleArticleResponse>,
    create: (props: ArticleCreation) => Promise<CreateArticleResponse>,
    delete: (props: DeleteArticleParams) => Promise<DeleteSingleArticleResponse>
}