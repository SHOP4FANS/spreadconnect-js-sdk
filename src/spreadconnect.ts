import { HttpClient } from "./http/http-client.js";
import { ArticlesApi } from "./api/articles-api.js";
import { OrdersApi } from "./api/orders-api.js";
import { SubscriptionsApi } from "./api/subscriptions-api.js";
import { ProductTypesApi } from "./api/product-types-api.js";

export class Spreadconnect {
  public articles: ArticlesApi;
  public orders: OrdersApi;
  public subscriptions: SubscriptionsApi;
  public productTypes: ProductTypesApi;

  constructor({ baseUrl, token }: { baseUrl: string; token: string }) {
    const client = new HttpClient(baseUrl, token);
    this.articles = new ArticlesApi(client);
    this.orders = new OrdersApi(client);
    this.subscriptions = new SubscriptionsApi(client);
    this.productTypes = new ProductTypesApi(client);
  }
}
