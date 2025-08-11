import { PRODUCT_TYPES_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import {
  GetProductTypesResponse,
  GetSingleProductTypesResponse,
  GetSingleSizeChartResponse,
} from "../types/spod-types.js";

export class ProductTypesApi {
  constructor(private client: HttpClient) {}

  list() {
    return this.client.request<GetProductTypesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}`,
    );
  }

  get(productTypeId: string) {
    return this.client.request<GetSingleProductTypesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}`,
    );
  }

  get_size_chart(productTypeId: string) {
    return this.client.request<GetSingleSizeChartResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/size-chart`,
    );
  }
}
