/**
 * Type definitions for the Spreadconnect API
 * Explicitly defined from OpenAPI schema
 */

// ==========================================
// Core Entity Types
// ==========================================

// Authentication
export type AuthResponse = {
  merchantId?: number;
  pointOfSaleId?: number;
  pointOfSaleName?: string;
  pointOfSaleType?: string;
};

// ==========================================
// Article Types
// ==========================================

export type Article = {
  readonly id?: number;
  title?: string;
  description?: string;
  variants?: ArticleVariant[];
  images?: ArticleImage[];
};

export type ArticleCreation = {
  title: string;
  description: string;
  variants: {
    productTypeId: number;
    appearanceId: number;
    sizeId: number;
    d2cPrice?: number;
    externalId?: string;
  }[];
  configurations: ArticleConfiguration[];
  externalId?: string;
};

export type ArticleVariant = {
  id?: number;
  productTypeId?: number;
  productTypeName?: string;
  productId?: number;
  appearanceId?: number;
  appearanceName?: string;
  appearanceColorValue?: string;
  sizeId?: number;
  sizeName?: string;
  sku?: string;
  d2cPrice?: number;
  imageIds?: number[];
};

export type ArticleImage = {
  id?: number;
  productId?: number;
  appearanceId?: number;
  appearanceName?: string;
  perspective?: string;
  imageUrl?: string;
};

export type ArticleConfiguration = {
  image: {
    url: string;
  };
  view: "FRONT" | "BACK" | "LEFT" | "RIGHT" | "HOOD_LEFT" | "HOOD_RIGHT";
};

// ==========================================
// Order Types
// ==========================================

export type Order = {
  id?: number;
  orderReference?: number;
  externalOrderReference?: string;
  externalOrderName?: string;
  state?: OrderState;
  orderItems?: GetOrderItem[];
  shipping?: ShippingInfo;
  billingAddress?: Address;
  phone?: string;
  email?: string;
  price?: Price;
  taxType?: TaxType;
  customerTaxType?: CustomerTaxType;
};

export type CreateOrder = {
  orderItems: CreateOrderItem[];
  shipping: {
    address: Address;
    fromAddress?: Address;
    preferredType?: PreferredShippingType;
    customerPrice: CustomerPrice;
  };
  billingAddress?: Address;
  phone: string;
  email: string;
  externalOrderReference: string;
  externalOrderName?: string;
  state?: "NEW" | "CONFIRMED";
  customerTaxType?: CustomerTaxType;
  origin?: string;
};

export type UpdateOrder = {
  orderItems: CreateOrderItem[];
  shipping: {
    address: Address;
    fromAddress?: Address;
    preferredType?: PreferredShippingType;
    customerPrice: CustomerPrice;
  };
  billingAddress?: Address;
  phone: string;
  email: string;
  externalOrderReference: string;
  externalOrderName?: string;
  state?: "NEW" | "CONFIRMED";
  customerTaxType?: CustomerTaxType;
  origin?: string;
};

export type CreateOrderItem = {
  sku: string;
  quantity: number;
  externalOrderItemReference?: string;
  customerPrice: CustomerPrice;
};

export type GetOrderItem = {
  orderItemReference?: number;
  externalOrderItemReference?: string;
  state?: OrderItemState;
  sku?: string;
  quantity: number;
  price?: Price;
  customerPrice?: CustomerPrice;
};

export type OrderState = "NEW" | "CONFIRMED" | "PROCESSED" | "CANCELLED";

export type OrderItemState =
  | "NEW"
  | "CHECKED"
  | "CANCELLED"
  | "PRODUCTION_ISSUE"
  | "IN_PRODUCTION"
  | "SENT";

// ==========================================
// Shipping Types
// ==========================================

export type ShippingType = {
  id?: string;
  company?: string;
  name?: string;
  description?: string;
};

export type AvailableShippingType = ShippingType & {
  price?: Price;
};

export type ShippingInfo = {
  address?: Address;
  fromAddress?: Address;
  type?: ShippingType;
  price?: Price;
  customerPrice?: CustomerPrice;
};

export type PreferredShippingType = "STANDARD" | "PREMIUM" | "EXPRESS";

// ==========================================
// Shipment Types
// ==========================================

export type Shipment = {
  id?: number;
  orderId?: number;
  orderReference?: number;
  externalOrderReference?: string;
  orderItemReferences?: number[];
  externalOrderItemReferences?: string[];
  shipping?: {
    address?: Address;
    type?: ShippingType;
    price?: Price;
  };
  tracking?: TrackingInfo[];
  closedDate?: string;
  sentDate?: string;
};

export type TrackingInfo = {
  code?: string;
  url?: string;
};

// ==========================================
// Price Types
// ==========================================

export type CustomerPrice = {
  amount: number;
  currency?: string;
};

export type Price = {
  amount: number;
  taxRate?: number;
  taxAmount?: number;
  currency?: string;
};

export type TaxType = "SALESTAX" | "VAT" | "NOT_TAXABLE";
export type CustomerTaxType = "SALESTAX" | "VAT" | "NOT_TAXABLE";

// ==========================================
// Address Types
// ==========================================

export type Address = {
  company?: string;
  firstName?: string;
  lastName: string;
  street: string;
  streetAnnex?: string;
  city: string;
  country: string;
  state?: string;
  zipCode: string;
};

// ==========================================
// Subscription Types
// ==========================================

export type Subscription = {
  readonly id?: number;
  eventType: EventType;
  url?: string;
  secret?: string;
};

export type EventType =
  | "Shipment.sent"
  | "Order.cancelled"
  | "Order.processed"
  | "Order.needs-action"
  | "Article.added"
  | "Article.updated"
  | "Article.removed";

// ==========================================
// Product Types
// ==========================================

export type ProductTypes = {
  id?: string;
  customerName?: string;
  customerDescription?: string;
  merchantName?: string;
  merchantDescription?: string;
  sizes?: ProductSize[];
  brand?: string;
  appearances?: ProductAppearance[];
  views?: ProductView[];
  price?: number;
  currency?: string;
};

export type ProductSize = {
  id?: string;
  name?: string;
};

export type ProductAppearance = {
  id?: string;
  name?: string;
};

export type ProductView =
  | "FRONT"
  | "BACK"
  | "LEFT"
  | "RIGHT"
  | "HOOD_LEFT"
  | "HOOD_RIGHT";

// ==========================================
// Size Chart Types
// ==========================================

export type SizeChart = {
  sizeImageUrl?: string;
  sizes?: SizeInfo[];
};

export type SizeInfo = {
  sizeId?: string;
  name?: string;
  measurements?: Measurement[];
};

export type Measurement = {
  name?: string;
  valueMm?: number;
  valueInch?: number;
};

// ==========================================
// Stock Types
// ==========================================

export type GetStocksResponse = {
  items?: {
    [key: string]: number;
  };
  count: number;
  limit: number;
  offset?: number;
};

export type GetStockResponse = number;

// ==========================================
// Error Types
// ==========================================

export type ErrorResponse = {
  orderId?: number;
  reason?: string;
};

// ==========================================
// Request Parameter Types
// ==========================================

export type GetArticlesParams = {
  limit?: number;
  offset?: number;
};

export type GetArticleParams = {
  articleId: number;
};

export type DeleteArticleParams = {
  articleId: number;
};

export type GetStocksParams = {
  limit?: number;
  offset?: number;
};

// ==========================================
// Response Types
// ==========================================

// Article Responses
export type GetArticlesResponse = {
  items?: Article[];
  count: number;
  limit: number;
  offset?: number;
};

export type CreateArticleResponse = number;
export type GetSingleArticleResponse = Article;
export type DeleteSingleArticleResponse = undefined;

// Order Responses
export type CreateOrderResponse = Order;
export type UpdateOrderResponse = Order;
export type GetSingleOrderResponse = Order;

// Shipping Responses
export type GetShippingTypesResponse = AvailableShippingType[];
export type GetShipmentsResponse = Shipment[];

// Product Responses
export type GetProductTypesResponse = {
  items?: ProductTypes[];
};
export type GetSingleProductTypesResponse = ProductTypes;
export type GetSingleSizeChartResponse = SizeChart;

// Subscription Responses
export type GetSubscriptionsResponse = Subscription[];
