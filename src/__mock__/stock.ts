import { ApiResponse, StocksResponse } from "../types";

export const StocksResponseMock: ApiResponse<StocksResponse> = {
    status: 200,
    data: {
        items: {
            "test": 10
        },
        count: 10,
        limit: 0
    }
}

export const StockResponseMock: ApiResponse<number> = {
    status: 200,
    data: 10
}