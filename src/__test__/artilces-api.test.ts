import { ArticleCreationMock, GetArticlesResponseMock, GetSingleArticleResponseMock } from "../__mock__/article";
import { ArticlesApi } from "../api/articles-api";
import { ARTICLES_PATH } from "../endpoints/spod-endpoints";
import { HttpClient } from "../http/http-client";


jest.mock('../http/http-client');

const MockedHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;

describe("Articles API", () => {

    let httpClient: jest.Mocked<HttpClient>;
    let api: ArticlesApi;

    beforeEach(() => {
        MockedHttpClient.mockClear();

        httpClient = new MockedHttpClient('', '') as unknown as jest.Mocked<HttpClient>;

        api = new ArticlesApi(httpClient);
    });

    test("List articles", async () => {
        httpClient.request.mockResolvedValueOnce(GetArticlesResponseMock);

        const props = { offset: 0, limit: 10 };

        const list = await api.list(props);

        expect(list).toEqual(GetArticlesResponseMock);
        expect(httpClient.request).toHaveBeenCalledWith("GET", `${ARTICLES_PATH}`, undefined, props);
    });

    test("Get article", async () => {
        const id = 10;
        httpClient.request.mockResolvedValueOnce(GetSingleArticleResponseMock);

        const article = await api.get({ articleId: id });

        expect(article).toEqual(GetSingleArticleResponseMock);
        expect(httpClient.request).toHaveBeenCalledWith("GET", `${ARTICLES_PATH}/${id}`);
    });

    test("Create article", async () => {
        httpClient.request.mockResolvedValueOnce(GetSingleArticleResponseMock);

        const newArticle = await api.create(ArticleCreationMock);

        expect(newArticle).toEqual(GetSingleArticleResponseMock);
        expect(httpClient.request).toHaveBeenCalledWith("POST", `${ARTICLES_PATH}`, ArticleCreationMock);
    });

    test("Delete article", async () => {
        const id = 10;
        httpClient.request.mockResolvedValueOnce(undefined as never);

        const deleted = await api.delete({ articleId: id });

        expect(deleted).toEqual(undefined);
        expect(httpClient.request).toHaveBeenCalledWith("DELETE", `${ARTICLES_PATH}/${id}`);
    })
}) 