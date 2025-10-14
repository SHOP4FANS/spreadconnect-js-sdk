/**
 * This file contains constants for the SPOD API endpoint paths.
 * It is derived from the OpenAPI schema.
 */

// Authentication
export const AUTHENTICATION_PATH = "/authentication";

// Articles
export const ARTICLES_PATH = "/articles";
export const ARTICLE_BY_ID_PATH = "/articles/{articleId}";

// Orders
export const ORDERS_PATH = "/orders";
export const ORDER_BY_ID_PATH = "/orders/{orderId}";
export const ORDER_SHIPPING_TYPES_PATH = "/orders/{orderId}/shippingTypes";
export const ORDER_SET_SHIPPING_TYPE_PATH = "/orders/{orderId}/shippingType";
export const ORDER_CONFIRM_PATH = "/orders/{orderId}/confirm";
export const ORDER_CANCEL_PATH = "/orders/{orderId}/cancel";
export const ORDER_SHIPMENTS_PATH = "/orders/{orderId}/shipments";

// Order Event Simulations
export const ORDER_SIMULATE_CANCELLED_EVENT_PATH =
  "/orders/{orderId}/simulate/order-cancelled";
export const ORDER_SIMULATE_PROCESSED_EVENT_PATH =
  "/orders/{orderId}/simulate/order-processed";
export const ORDER_SIMULATE_SHIPMENT_SENT_EVENT_PATH =
  "/orders/{orderId}/simulate/shipment-sent";

// Subscriptions
export const SUBSCRIPTIONS_PATH = "/subscriptions";
export const SUBSCRIPTION_BY_ID_PATH = "/subscriptions/{subscriptionId}";

// Product Types
export const PRODUCT_TYPES_PATH = "/productTypes";
export const PRODUCT_TYPE_BY_ID_PATH = "/productTypes/{productTypeId}";
export const PRODUCT_TYPE_SIZE_CHART_PATH =
  "/productTypes/{productTypeId}/size-chart";

// Stock
export const STOCKS_PATH = "/stock";
export const STOCK_BY_SKU_PATH = "/stock/{sku}";

// Design
export const DESIGNS_PATH = "/designs";
