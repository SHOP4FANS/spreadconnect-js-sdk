import { StockResponseMock, StocksResponseMock } from "../../__mock__/stock";
import { StocksApi } from "../../api/stocks-api";
import { STOCKS_PATH } from "../../endpoints/spod-endpoints";
import { HttpClient } from "../../http/http-client";

jest.mock("../../http/http-client");

const MockedHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;

describe("Orders API", () => {
  let httpClient: jest.Mocked<HttpClient>;
  let api: StocksApi;

  beforeEach(() => {
    MockedHttpClient.mockClear();

    httpClient = new MockedHttpClient(
      "",
      "",
    ) as unknown as jest.Mocked<HttpClient>;

    api = new StocksApi(httpClient);
  });

  test("Get stocks list", async () => {
    const params = { offset: 10, limit: 0 };
    httpClient.request.mockResolvedValueOnce(StocksResponseMock);

    const stocks = await api.list(params);

    expect(stocks).toEqual(StocksResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      STOCKS_PATH,
      undefined,
      params,
    );
  });

  test("Get single stock", async () => {
    const sku = "test";
    httpClient.request.mockResolvedValueOnce(StockResponseMock);

    const stock = await api.get(sku);

    expect(stock).toEqual(StockResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${STOCKS_PATH}/${sku}`,
    );
  });

  test("Throws on network error", async () => {
    httpClient.request.mockRejectedValueOnce(new Error("Network Error"));

    await expect(api.get("10")).rejects.toThrow("Network Error");
  });
});
