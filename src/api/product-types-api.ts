import { PRODUCT_TYPES_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import {
  GetProductTypesResponse,
  GetSingleProductTypesResponse,
  GetSingleSizeChartResponse,
} from "../types/spod-types.js";

export class ProductTypesApi {
  constructor(private client: HttpClient) {}

  /**
   * Retrieves all available product types.
   *
   * Sends a GET request to the `/productTypes` endpoint.
   * This provides information about all product types available for creating articles.
   *
   * @returns A promise that resolves with the list of available product types.
   */
  list() {
    return this.client.request<GetProductTypesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}`,
    );
  }

  /**
   * Retrieves detailed information about a specific product type.
   *
   * Sends a GET request to the `/productTypes/{productTypeId}` endpoint.
   *
   * @param productTypeId - The ID of the product type to retrieve.
   *
   * @returns A promise that resolves with the detailed product type information.
   */
  get(productTypeId: string) {
    return this.client.request<GetSingleProductTypesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}`,
    );
  }

  /**
   * Retrieves the size chart for a specific product type.
   *
   * Sends a GET request to the `/productTypes/{productTypeId}/size-chart` endpoint.
   * The size chart consists of an image of a simplified model of the product, with names
   * of measurements ("A", "B", etc), and the values of the measurements, in both inches
   * and mm, for each of the product's sizes.
   *
   * @param productTypeId - The ID of the product type to retrieve the size chart for.
   *
   * @returns A promise that resolves with the size chart information.
   */
  get_size_chart(productTypeId: string) {
    return this.client.request<GetSingleSizeChartResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/size-chart`,
    );
  }
}
