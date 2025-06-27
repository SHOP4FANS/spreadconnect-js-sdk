import { STOCKS_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import {
  GetStockResponse,
  GetStocksParams,
  StocksResponse,
} from "../types/spod-types.js";

export class StocksApi {
  constructor(private client: HttpClient) {}

  list(params?: GetStocksParams) {
    return this.client.request<StocksResponse>(
      "GET",
      `${STOCKS_PATH}`,
      undefined,
      params,
    );
  }

  get(sku: string) {
    return this.client.request<number>("GET", `${STOCKS_PATH}/${sku}`);
  }
}
