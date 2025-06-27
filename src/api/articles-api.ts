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

  get(props: GetArticleParams) {
    return this.client.request<GetSingleArticleResponse>(
      "GET",
      `${ARTICLES_PATH}/${props.articleId}`,
    );
  }

  create(props: ArticleCreation) {
    return this.client.request<CreateArticleResponse>(
      "POST",
      ARTICLES_PATH,
      props,
    );
  }

  delete(props: DeleteArticleParams) {
    return this.client.request<DeleteSingleArticleResponse>(
      "DELETE",
      `${ARTICLES_PATH}/${props.articleId}`,
    );
  }
}
