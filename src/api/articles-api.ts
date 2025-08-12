import { HttpClient } from "../http/http-client.js";
import { ARTICLES_PATH } from "../endpoints/spod-endpoints.js";
import {
  ArticleCreation,
  CreateArticleResponse,
  DeleteSingleArticleResponse,
  GetArticlesParams,
  GetArticlesResponse,
  GetSingleArticleResponse,
} from "../types/spod-types.js";

export class ArticlesApi {
  constructor(private client: HttpClient) {}

  /**
   * Retrieves all articles from the point of sale.
   *
   * Sends a GET request to the `/articles` endpoint.
   *
   * @param [params] - Optional query parameters for pagination.
   * @param [params.limit] - The maximum number of results to return.
   * @param [params.offset] - The offset to start retrieving records from.
   *
   * @returns A promise that resolves with the list of articles.
   */
  list(params?: GetArticlesParams) {
    return this.client.request<GetArticlesResponse>(
      "GET",
      ARTICLES_PATH,
      undefined,
      params,
    );
  }

  /**
   * Retrieves a specific article by its ID.
   *
   * Sends a GET request to the `/articles/{articleId}` endpoint.
   *
   * @param articleId - The ID of the article to retrieve.
   *
   * @returns A promise that resolves with the article details.
   */
  get(articleId: number) {
    return this.client.request<GetSingleArticleResponse>(
      "GET",
      `${ARTICLES_PATH}/${articleId}`,
    );
  }

  /**
   * Creates a new article in the point of sale.
   *
   * Sends a POST request to the `/articles` endpoint with the article details.
   * In the variants array, you can enable the sizes and colors of your product.
   * In the configuration array, you can place designs via URL. The image must be in PNG format and under 10 MB.
   *
   * @param props - The article data to create.
   * @param props.title - The title of the article.
   * @param props.description - The description of the article.
   * @param props.variants - The variants of the article (sizes, colors).
   * @param props.configurations - The design configurations for the article.
   * @param [props.externalId] - Optional external ID for identifying the article.
   *
   * @returns A promise that resolves with the ID of the created article.
   */
  create(props: ArticleCreation) {
    return this.client.request<CreateArticleResponse>(
      "POST",
      ARTICLES_PATH,
      props,
    );
  }

  /**
   * Deletes a specific article from the point of sale.
   *
   * Sends a DELETE request to the `/articles/{articleId}` endpoint.
   *
   * @param articleId - The ID of the article to delete.
   *
   * @returns A promise that resolves when the article is successfully deleted.
   */
  delete(articleId: number) {
    return this.client.request<DeleteSingleArticleResponse>(
      "DELETE",
      `${ARTICLES_PATH}/${articleId}`,
    );
  }
}
