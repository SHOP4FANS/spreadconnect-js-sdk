import { ORDERS_PATH } from "../endpoints/spod-endpoints";
import { HttpClient } from "../http/http-client";
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

  create(props: CreateOrder) {
    return this.client.request<CreateOrderResponse>("POST", ORDERS_PATH, props);
  }

  update(orderId: string, props: UpdateOrder) {
    return this.client.request<UpdateOrderResponse>(
      "UPDATE",
      `${ORDERS_PATH}/${orderId}`,
      props,
    );
  }

  get(orderId: string) {
    return this.client.request<GetSingleOrderResponse>(
      "GET",
      `${ORDERS_PATH}/${orderId}`,
    );
  }

  confirm(orderId: string) {
    return this.client.request<ErrorResponse | void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/confirm`,
    );
  }

  cancel(orderId: string) {
    return this.client.request<ErrorResponse | void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/cancel`,
    );
  }

  get_available_shipping_types(orderId: string) {
    return this.client.request<GetShippingTypesResponse>(
      "GET",
      `${ORDERS_PATH}/${orderId}/shippingTypes`,
    );
  }

  set_shipping_type(orderId: string) {
    return this.client.request<void>(
      "POST",
      `${ORDERS_PATH}/${orderId}/shippingType`,
    );
  }

  get_shipments(orderId: string) {
    return this.client.request<GetShipmentsResponse>(
      "GET",
      `${ORDERS_PATH}/${orderId}/shipments`,
    );
  }
}
