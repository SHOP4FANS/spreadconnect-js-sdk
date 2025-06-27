import { ApiResponse } from "../types/sdk-types.js";
import { toQueryString } from "../utils/query-string.js";

export class HttpClient {
  constructor(
    private baseUrl: string,
    private token: string,
  ) {}

  async request<T>(
    method: string,
    path: string,
    body?: any,
    queryParams?: Record<string, any>,
  ): Promise<ApiResponse<T>> {
    let url = this.baseUrl + path;
    if (queryParams && Object.keys(queryParams).length > 0) {
      url += "?" + toQueryString(queryParams);
    }
    const result = await fetch(url, {
      method,
      headers: {
        "X-SPOD-ACCESS-TOKEN": this.token,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await result.text();
    let data: T | undefined = undefined;
    try {
      data = text ? JSON.parse(text) : undefined;
    } catch {}
    return {
      status: result.status,
      data,
      rawBody: text,
    };
  }
}
