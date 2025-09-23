import { PRODUCT_TYPES_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import {
  GetProductTypesResponse,
  GetSingleProductTypesResponse,
  GetSingleSizeChartResponse,
  GetProductTypeCategoriesResponse,
  GetProductTypeViewsResponse,
  GetProductTypeDesignHotspotsResponse,
  GetProductTypePreviewsResponse,
} from "../types/spod-types.js";

export class ProductTypesApi {
  constructor(private client: HttpClient) {}

  /**
   * Retrieves all available product types.
   *
   * Sends a GET request to the `/productTypes` endpoint.
   * This provides information about all product types available for creating articles.
   *
   * @returns A promise that resolves with the list of available product types.
   */
  list() {
    return this.client.request<GetProductTypesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}`,
    );
  }

  /**
   * Retrieves detailed information about a specific product type.
   *
   * Sends a GET request to the `/productTypes/{productTypeId}` endpoint.
   *
   * @param productTypeId - The ID of the product type to retrieve.
   *
   * @returns A promise that resolves with the detailed product type information.
   */
  get(productTypeId: string) {
    return this.client.request<GetSingleProductTypesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}`,
    );
  }

  /**
   * Retrieves the size chart for a specific product type.
   *
   * Sends a GET request to the `/productTypes/{productTypeId}/size-chart` endpoint.
   * The size chart consists of an image of a simplified model of the product, with names
   * of measurements ("A", "B", etc), and the values of the measurements, in both inches
   * and mm, for each of the product's sizes.
   *
   * @param productTypeId - The ID of the product type to retrieve the size chart for.
   *
   * @returns A promise that resolves with the size chart information.
   */
  get_size_chart(productTypeId: string) {
    return this.client.request<GetSingleSizeChartResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/size-chart`,
    );
  }

  /**
   * Retrieves the complete category tree of product types.
   *
   * Sends a GET request to `/productTypes/categories`.
   *
   * @returns A promise that resolves with the full category tree including categories, features, brands and genders.
   */
  get_category_tree() {
    return this.client.request<GetProductTypeCategoriesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/categories`,
    );
  }

  /**
   * Retrieves the categories assigned to a specific product type.
   *
   * Sends a GET request to `/productTypes/{productTypeId}/categories`.
   *
   * @param productTypeId - The ID of the product type to retrieve categories for.
   *
   * @returns A promise that resolves with the category information for the given product type.
   */
  get_categories_by_product_type(productTypeId: string) {
    return this.client.request<GetProductTypeCategoriesResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/categories`,
    );
  }

  /**
   * Retrieves all views (front, back, etc.), including hotspots and images, for a given product type.
   *
   * Sends a GET request to `/productTypes/{productTypeId}/views`.
   *
   * @param productTypeId - The ID of the product type to retrieve views for.
   *
   * @returns A promise that resolves with the views including hotspots and images.
   */
  get_views(productTypeId: string) {
    return this.client.request<GetProductTypeViewsResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/views`,
    );
  }

  /**
   * Retrieves the available hotspots for a specific product type and design.
   *
   * Sends a GET request to `/productTypes/{productTypeId}/hotspots/design/{designId}`.
   *
   * @param productTypeId - The ID of the product type to retrieve hotspots for.
   * @param designId - The ID of the design to check against.
   *
   * @returns A promise that resolves with the available hotspots for the given design.
   */
  get_design_hotspots(productTypeId: string, designId: string) {
    return this.client.request<GetProductTypeDesignHotspotsResponse>(
      "GET",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/hotspots/design/${designId}`,
    );
  }

  /**
   * Retrieves preview images for a product type given hotspot-design configurations.
   *
   * Sends a POST request to `/productTypes/{productTypeId}/previews`.
   *
   * @param productTypeId - The ID of the product type.
   * @param body - The preview request body, including configurations, appearanceId, width and height.
   *
   * @returns A promise that resolves with preview images.
   */
  get_previews(
    productTypeId: string,
    body: {
      configurations: { designId: string; hotspot: string }[];
      appearanceId?: string;
      width?: number;
      height?: number;
    },
  ) {
    return this.client.request<GetProductTypePreviewsResponse>(
      "POST",
      `${PRODUCT_TYPES_PATH}/${productTypeId}/previews`,
      body,
    );
  }
}
