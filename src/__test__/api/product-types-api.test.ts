import {
  GetProductTypesResponseMock,
  GetSingleProductTypeResponseMock,
  SizeChartResponseMock,
  GetProductTypeCategoriesResponseMock,
  GetProductTypeViewsResponseMock,
  GetProductTypeDesignHotspotsResponseMock,
  GetProductTypePreviewsResponseMock,
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

  test("Get product type category tree", async () => {
    httpClient.request.mockResolvedValueOnce(
      GetProductTypeCategoriesResponseMock,
    );

    const res = await api.get_category_tree();

    expect(res).toEqual(GetProductTypeCategoriesResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}/categories`,
    );
  });

  test("Get categories by product type", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(
      GetProductTypeCategoriesResponseMock,
    );

    const res = await api.get_categories_by_product_type(id);

    expect(res).toEqual(GetProductTypeCategoriesResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}/${id}/categories`,
    );
  });

  test("Get views", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(GetProductTypeViewsResponseMock);

    const res = await api.get_views(id);

    expect(res).toEqual(GetProductTypeViewsResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}/${id}/views`,
    );
  });

  test("Get design hotspots", async () => {
    const productTypeId = "10";
    const designId = "123";
    httpClient.request.mockResolvedValueOnce(
      GetProductTypeDesignHotspotsResponseMock,
    );

    const res = await api.get_design_hotspots(productTypeId, designId);

    expect(res).toEqual(GetProductTypeDesignHotspotsResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/hotspots/design/${designId}`,
    );
  });

  test("Get previews", async () => {
    const productTypeId = "10";
    const body = {
      configurations: [{ designId: "123", hotspot: "CHEST_LEFT" }],
    };
    httpClient.request.mockResolvedValueOnce(
      GetProductTypePreviewsResponseMock,
    );

    const res = await api.get_previews(productTypeId, body);

    expect(res).toEqual(GetProductTypePreviewsResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/previews`,
      body,
    );
  });

  test("Throws on network error", async () => {
    httpClient.request.mockRejectedValueOnce(new Error("Network Error"));

    await expect(api.get("10")).rejects.toThrow("Network Error");
  });
});
