import {
  GetProductTypesResponseMock,
  GetSingleProductTypeResponseMock,
  SizeChartResponseMock,
} from "../../__mock__/order-type";
import { ProductTypesApi } from "../../api/product-types-api";
import { PRODUCT_TYPES_PATH } from "../../endpoints/spod-endpoints";
import { HttpClient } from "../../http/http-client";

jest.mock("../../http/http-client");

const MockedHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;

describe("Product Types API", () => {
  let httpClient: jest.Mocked<HttpClient>;
  let api: ProductTypesApi;

  beforeEach(() => {
    MockedHttpClient.mockClear();

    httpClient = new MockedHttpClient(
      "",
      "",
    ) as unknown as jest.Mocked<HttpClient>;

    api = new ProductTypesApi(httpClient);
  });

  test("List product types", async () => {
    httpClient.request.mockResolvedValueOnce(GetProductTypesResponseMock);

    const list = await api.list();

    expect(list).toEqual(GetProductTypesResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}`,
    );
  });

  test("Get product type", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(GetSingleProductTypeResponseMock);

    const productType = await api.get(id);

    expect(productType).toEqual(GetSingleProductTypeResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}/${id}`,
    );
  });

  test("Get size chart", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(SizeChartResponseMock);

    const sizeChart = await api.get_size_chart(id);

    expect(sizeChart).toEqual(SizeChartResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}/${id}/size-chart`,
    );
  });

  test("Throws on network error", async () => {
    httpClient.request.mockRejectedValueOnce(new Error("Network Error"));

    await expect(api.get("10")).rejects.toThrow("Network Error");
  });
});
