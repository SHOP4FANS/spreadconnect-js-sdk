import {
  ApiResponse,
  GetProductTypesResponse,
  ProductTypes,
  SizeChart,
  GetProductTypeCategoriesResponse,
  GetProductTypeViewsResponse,
  GetProductTypeDesignHotspotsResponse,
  GetProductTypePreviewsResponse,
} from "../types";

const productType: ProductTypes = {
  id: "10",
  customerName: "Test",
};

export const SizeChartResponseMock: ApiResponse<SizeChart> = {
  status: 200,
  data: {
    sizeImageUrl: "image",
  },
};

export const GetSingleProductTypeResponseMock: ApiResponse<ProductTypes> = {
  status: 200,
  data: productType,
};

export const GetProductTypesResponseMock: ApiResponse<GetProductTypesResponse> =
  {
    status: 200,
    data: {
      items: [productType],
    },
  };

export const GetProductTypeCategoriesResponseMock: ApiResponse<GetProductTypeCategoriesResponse> =
  {
    status: 200,
    data: {
      categories: [
        {
          id: "root",
          translation: "Root Category",
          children: [{ id: "child1", translation: "Child Category" }],
        },
      ],
      features: [{ id: "feat1", translation: "Special Feature" }],
      brands: [{ id: "brand1", translation: "Brand Test" }],
      genders: [{ id: "gender1", translation: "Unisex" }],
    },
  };

export const GetProductTypeViewsResponseMock: ApiResponse<GetProductTypeViewsResponse> =
  {
    status: 200,
    data: {
      views: [
        {
          id: "front",
          name: "FRONT",
          hotspots: [{ name: "CHEST_LEFT" }],
          images: [{ appearanceId: "1", image: "image-url-front.png" }],
        },
      ],
    },
  };

export const GetProductTypeDesignHotspotsResponseMock: ApiResponse<GetProductTypeDesignHotspotsResponse> =
  {
    status: 200,
    data: {
      hotspots: [{ name: "CHEST_LEFT" }, { name: "BACK_CENTER" }],
    },
  };

export const GetProductTypePreviewsResponseMock: ApiResponse<GetProductTypePreviewsResponse> =
  {
    status: 200,
    data: {
      images: [
        { url: "preview-front.png", viewId: "front", viewName: "FRONT" },
        { url: "preview-back.png", viewId: "back", viewName: "BACK" },
      ],
    },
  };
