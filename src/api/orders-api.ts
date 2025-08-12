import { ORDERS_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import {
  CreateOrder,
  ErrorResponse,
  Order,
  GetShipmentsResponse,
  GetShippingTypesResponse,
  CreateOrderResponse,
  UpdateOrderResponse,
  UpdateOrder,
  GetSingleOrderResponse,
} from "../types/index.js";

export class OrdersApi {
  constructor(private client: HttpClient) {}

  /**
   * Creates a new order.
   *
   * Sends a POST request to the `/orders` endpoint with the order details.
   * You can choose to set the shipping type and confirm the order in one request,
   * or create the order first and set these properties later.
   *
   * @param props - The order data to create.
   *
   * @returns A promise that resolves with the created order details.
   */
  create(props: CreateOrder) {
    return this.client.request<CreateOrderResponse>("POST", ORDERS_PATH, props);
  }

  /**
   * Updates an existing order.
   *
   * Sends an UPDATE request to the `/orders/{orderId}` endpoint with the updated order details.
   *
   * @param orderId - The ID of the order to update.
   * @param props - The updated order data.
   *
   * @returns A promise that resolves with the updated order details.
   */
  update(orderId: string, props: UpdateOrder) {
    return this.client.request<UpdateOrderResponse>(
      "UPDATE",
      `${ORDERS_PATH}/${orderId}`,
      props,
    );
  }

  /**
   * Retrieves a specific order by its ID.
   *
   * Sends a GET request to the `/orders/{orderId}` endpoint.
   *
   * @param orderId - The ID of the order to retrieve.
   *
   * @returns A promise that resolves with the order details.
   */
  get(orderId: string) {
    return this.client.request<GetSingleOrderResponse>(
      "GET",
      `${ORDERS_PATH}/${orderId}`,
    );
  }

  /**
   * Confirms an order.
   *
   * Sends a POST request to the `/orders/{orderId}/confirm` endpoint.
   * To confirm an order, it's necessary to set a shipping type first.
   *
   * @param orderId - The ID of the order to confirm.
   *
   * @returns A promise that resolves when the order is confirmed or rejects with an error.
   */
  confirm(orderId: string) {
    return this.client.request<ErrorResponse | void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/confirm`,
    );
  }

  /**
   * Cancels an order.
   *
   * Sends a POST request to the `/orders/{orderId}/cancel` endpoint.
   * It is not possible to cancel orders that have already been sent or are already in production.
   *
   * @param orderId - The ID of the order to cancel.
   *
   * @returns A promise that resolves when the order is cancelled or rejects with an error.
   */
  cancel(orderId: string) {
    return this.client.request<ErrorResponse | void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/cancel`,
    );
  }

  /**
   * Retrieves all available shipping types for a specific order.
   *
   * Sends a GET request to the `/orders/{orderId}/shippingTypes` endpoint.
   *
   * @param orderId - The ID of the order to get shipping types for.
   *
   * @returns A promise that resolves with the list of available shipping types.
   */
  get_available_shipping_types(orderId: string) {
    return this.client.request<GetShippingTypesResponse>(
      "GET",
      `${ORDERS_PATH}/${orderId}/shippingTypes`,
    );
  }

  /**
   * Sets the shipping type for an order.
   *
   * Sends a POST request to the `/orders/{orderId}/shippingType` endpoint.
   *
   * @param orderId - The ID of the order to set the shipping type for.
   * @param shippingTypeId - The ID of the shipping type to set.
   *
   * @returns A promise that resolves when the shipping type is set.
   */
  set_shipping_type(orderId: string, shippingTypeId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/shippingType`,
      { id: shippingTypeId },
    );
  }

  /**
   * Retrieves all shipments for a specific order.
   *
   * Sends a GET request to the `/orders/{orderId}/shipments` endpoint.
   *
   * @param orderId - The ID of the order to get shipments for.
   *
   * @returns A promise that resolves with the list of shipments.
   */
  get_shipments(orderId: string) {
    return this.client.request<GetShipmentsResponse>(
      "GET",
      `${ORDERS_PATH}/${orderId}/shipments`,
    );
  }
}
