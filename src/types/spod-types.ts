/**
 * Type definitions for the Spreadconnect API
 * Generated from OpenAPI schema
 */

import { components, operations } from "./spod-schema.js";

// Authentication
export type AuthResponse = operations['authentication info']['responses'][200]['content']['application/json'];

// Articles
export type Article = components['schemas']['Article'];
export type ArticleCreation = components['schemas']['ArticleCreation'];
export type ArticleVariant = NonNullable<Article['variants']> extends (infer T)[] ? T : never;
export type ArticleImage = NonNullable<Article['images']> extends (infer T)[] ? T : never;
export type ArticleConfiguration = NonNullable<ArticleCreation['configurations']> extends (infer T)[] ? T : never;

// Orders
export type CreateOrder = components['schemas']['CreateOrder'];
export type GetOrder = components['schemas']['GetOrder'];
export type CreateOrderItem = components['schemas']['CreateOrderItem'];
export type GetOrderItem = components['schemas']['GetOrderItem'];
export type OrderState = NonNullable<GetOrder['state']>;
export type OrderItemState = NonNullable<GetOrderItem['state']>;

// Shipping
export type ShippingType = components['schemas']['ShippingType'];
export type AvailableShippingType = components['schemas']['AvailableShippingType'];
export type ShippingInfo = NonNullable<GetOrder['shipping']>;
export type PreferredShippingType = NonNullable<NonNullable<CreateOrder['shipping']>['preferredType']>;

// Prices
export type CustomerPrice = components['schemas']['CustomerPrice'];
export type Price = components['schemas']['Price'];

// Addresses
export type Address = components['schemas']['Address'];

// Shipments
export type Shipment = components['schemas']['Shipment'];
export type TrackingInfo = NonNullable<Shipment['tracking']> extends (infer T)[] ? T : never;

// Subscriptions
export type Subscription = components['schemas']['Subscription'];
export type EventType = NonNullable<Subscription['eventType']>;

// Product Types
export type ProductTypes = components['schemas']['ProductTypes'];
export type ProductSize = NonNullable<ProductTypes['sizes']> extends (infer T)[] ? T : never;
export type ProductAppearance = NonNullable<ProductTypes['appearances']> extends (infer T)[] ? T : never;
export type ProductView = NonNullable<ProductTypes['views']> extends (infer T)[] ? T : never;

// Size Charts
export type SizeChart = components['schemas']['SizeChart'];
export type SizeInfo = NonNullable<SizeChart['sizes']> extends (infer T)[] ? T : never;
export type Measurement = NonNullable<NonNullable<SizeInfo['measurements']>> extends (infer T)[] ? T : never;

// Errors
export type ErrorResponse = components['schemas']['ErrorResponse'];

// Stock
export type StocksResponse = operations['getStocks']['responses'][200]['content']['application/json'];

// Request Parameters
export type GetArticlesParams = operations['getArticles']['parameters']['query'];
export type GetArticleParams = operations['getArticle']['parameters']['path'];
export type DeleteArticleParams = operations['deleteArticle']['parameters']['path'];

export type GetStocksParams = operations['getStocks']['parameters']['query'];

// Response Types
export type GetArticlesResponse = operations['getArticles']['responses'][200]['content']['application/json'];
export type CreateArticleResponse = operations['createArticle']['responses'][202]['content']['application/json'];
export type GetSingleArticleResponse = operations['getArticle']['responses'][200]['content']['application/json'];
export type DeleteSingleArticleResponse = operations['deleteArticle']['responses'][200]['content'];

export type GetShippingTypesResponse = operations['getShippingTypes']['responses'][200]['content']['application/json'];
export type GetShipmentsResponse = operations['getShipments']['responses'][200]['content']['application/json'];
export type GetProductTypesResponse = operations['getProductTypes']['responses'][200]['content']['application/json'];
export type GetStockResponse = operations['getStock']['responses'][200]['content']['application/json'];
export type GetSubscriptionsResponse = operations['getSubscriptions']['responses'][200]['content']['application/json'];

// Tax Types
export type TaxType = NonNullable<GetOrder['taxType']>;
export type CustomerTaxType = NonNullable<CreateOrder['customerTaxType']>;