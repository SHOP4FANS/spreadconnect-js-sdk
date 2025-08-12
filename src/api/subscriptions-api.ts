import {
  ORDERS_PATH,
  SUBSCRIPTIONS_PATH,
} from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import { GetSubscriptionsResponse, Subscription } from "../types/spod-types.js";

export class SubscriptionsApi {
  constructor(private client: HttpClient) {}

  /**
   * Creates a new subscription for specific event notifications.
   *
   * Sends a POST request to the `/subscriptions` endpoint with the given subscription details.
   * The `eventType` field is required and must be one of the following:
   * - "Shipment.sent"
   * - "Order.cancelled"
   * - "Order.processed"
   * - "Order.needs-action"
   * - "Article.added"
   * - "Article.updated"
   * - "Article.removed"
   *
   * @param props - The subscription data.
   * @param props.eventType - The type of event to subscribe to (required).
   * @param [props.url] - The URL to which event notifications will be sent.
   * @param [props.secret] - A secret used for verifying webhook payloads.
   *
   * @returns A promise that resolves when the subscription is successfully created.
   */

  create(props: Subscription) {
    return this.client.request<void>("POST", `${SUBSCRIPTIONS_PATH}`, props);
  }

  /**
   * Retrieves the list of active subscriptions.
   *
   * Sends a GET request to the `/subscriptions` endpoint.
   *
   * @returns A promise that resolves with the list of subscriptions.
   */
  list() {
    return this.client.request<GetSubscriptionsResponse>(
      "GET",
      `${SUBSCRIPTIONS_PATH}`,
    );
  }

  /**
   * Deletes an existing subscription by its ID.
   *
   * Sends a DELETE request to the `/subscriptions/{subscriptionId}` endpoint.
   *
   * @param subscriptionId - The ID of the subscription to delete.
   *
   * @returns A promise that resolves when the subscription is successfully deleted.
   */
  delete(subscriptionId: string) {
    return this.client.request<void>(
      "DELETE",
      `${SUBSCRIPTIONS_PATH}/${subscriptionId}`,
    );
  }

  /**
   * Simulates the `Order.cancelled` event for a given order.
   *
   * Sends a POST request to `/orders/{orderId}/simulate/order-cancelled`.
   * Useful for testing webhook handling of the `Order.cancelled` event.
   *
   * @param orderId - The ID of the order to simulate the event for.
   *
   * @returns A promise that resolves if the simulation is successful.
   */
  simulate_order_cancelled(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/simulate/order-cancelled`,
    );
  }

  /**
   * Simulates the `Order.processed` event for a given order.
   *
   * Sends a POST request to `/orders/{orderId}/simulate/order-processed`.
   * Useful for testing webhook handling of the `Order.processed` event.
   *
   * @param orderId - The ID of the order to simulate the event for.
   *
   * @returns A promise that resolves if the simulation is successful.
   */
  simulate_order_processed(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/simulate/order-processed`,
    );
  }

  /**
   * Simulates the `Shipment.sent` event for a given order.
   *
   * Sends a POST request to `/orders/{orderId}/simulate/shipment-sent`.
   * Useful for testing webhook handling of the `Shipment.sent` event.
   *
   * @param orderId - The ID of the order to simulate the event for.
   *
   * @returns A promise that resolves if the simulation is successful.
   */
  simulate_shipment_sent(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/simulate/shipment-sent`,
    );
  }
}
