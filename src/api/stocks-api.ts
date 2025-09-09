import { STOCKS_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import {
  GetStockResponse,
  GetStocksParams,
  GetStocksResponse,
  GetStockByProductTypeResponse,
} from "../types/spod-types.js";

export class StocksApi {
  constructor(private client: HttpClient) {}

  /**
   * Retrieves the available stock for all variants in the point of sale.
   *
   * Sends a GET request to the `/stock` endpoint.
   * The result is a map of variant's SKUs associated with their stock amount.
   *
   * @param [params] - Optional query parameters for pagination.
   * @param [params.limit] - The maximum number of results to return.
   * @param [params.offset] - The offset to start retrieving records from.
   *
   * @returns A promise that resolves with the stock information for all variants.
   */
  list(params?: GetStocksParams) {
    return this.client.request<GetStocksResponse>(
      "GET",
      `${STOCKS_PATH}`,
      undefined,
      params,
    );
  }

  /**
   * Retrieves the available stock for a specific variant by its SKU.
   *
   * Sends a GET request to the `/stock/{sku}` endpoint.
   *
   * @param sku - The Stock Keeping Unit (SKU) identifier of the variant.
   *
   * @returns A promise that resolves with the stock amount for the specified variant.
   */
  get(sku: string) {
    return this.client.request<number>("GET", `${STOCKS_PATH}/${sku}`);
  }

  /**
   * Retrieves the available stock for a specific product type with all its variants.
   *
   * Sends a GET request to the `/stock/productType/{productTypeId}` endpoint.
   *
   * @param productTypeId - The ID of the product type to retrieve stock for.
   *
   * @returns A promise that resolves with the stock information grouped by variants (appearance + size).
   */
  get_by_productType(productTypeId: string) {
    return this.client.request<GetStockByProductTypeResponse>(
      "GET",
      `${STOCKS_PATH}/productType/${productTypeId}`,
    );
  }
}
