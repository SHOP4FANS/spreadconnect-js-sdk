import { HttpClient } from "../http/http-client.js";
import { ARTICLES_PATH } from "../endpoints/spod-endpoints.js";
import {
  ArticleCreation,
  CreateArticleResponse,
  DeleteArticleParams,
  DeleteSingleArticleResponse,
  GetArticleParams,
  GetArticlesParams,
  GetArticlesResponse,
  GetSingleArticleResponse,
} from "../types/spod-types.js";

export class ArticlesApi {
  constructor(private client: HttpClient) {}

  list(params?: GetArticlesParams) {
    return this.client.request<GetArticlesResponse>(
      "GET",
      ARTICLES_PATH,
      undefined,
      params,
    );
  }

  get(articleId: number) {
    return this.client.request<GetSingleArticleResponse>(
      "GET",
      `${ARTICLES_PATH}/${articleId}`,
    );
  }

  create(props: ArticleCreation) {
    return this.client.request<CreateArticleResponse>(
      "POST",
      ARTICLES_PATH,
      props,
    );
  }

  delete(articleId: number) {
    return this.client.request<DeleteSingleArticleResponse>(
      "DELETE",
      `${ARTICLES_PATH}/${articleId}`,
    );
  }
}
