import { ApiResponse, GetProductTypesResponse, ProductTypes, SizeChart } from "../types";

const productType: ProductTypes = {
    id: "10",
    customerName: "Test"
}

export const SizeChartResponseMock: ApiResponse<SizeChart> = {
    status: 200,
    data: {
        sizeImageUrl: "image"
    }
}

export const GetSingleProductTypeResponseMock: ApiResponse<ProductTypes> = {
    status: 200,
    data: productType
}

export const GetProductTypesResponseMock: ApiResponse<GetProductTypesResponse> = {
    status: 200,
    data: {
        items: [productType],
        
    }
}