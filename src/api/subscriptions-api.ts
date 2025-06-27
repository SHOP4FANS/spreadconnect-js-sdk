import {
  ORDERS_PATH,
  SUBSCRIPTIONS_PATH,
} from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import { GetSubscriptionsResponse, Subscription } from "../types/spod-types.js";

export class SubscriptionsApi {
  constructor(private client: HttpClient) {}

  create(props: Subscription) {
    return this.client.request<void>("POST", `${SUBSCRIPTIONS_PATH}`, props);
  }

  list() {
    return this.client.request<GetSubscriptionsResponse>(
      "GET",
      `${SUBSCRIPTIONS_PATH}`,
    );
  }

  delete(subscriptionId: string) {
    return this.client.request<void>(
      "DELETE",
      `${SUBSCRIPTIONS_PATH}/${subscriptionId}`,
    );
  }

  simulate_order_cancelled(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/simulate/order-cancelled`,
    );
  }

  simulate_order_processed(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/simulate/order-processed`,
    );
  }

  simulate_shipment_sent(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/simulate/shipment-sent`,
    );
  }
}
