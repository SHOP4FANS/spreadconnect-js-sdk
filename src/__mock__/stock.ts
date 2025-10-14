import {
  ApiResponse,
  GetStocksResponse,
  GetStockByProductTypeResponse,
} from "../types";

export const StocksResponseMock: ApiResponse<GetStocksResponse> = {
  status: 200,
  data: {
    items: {
      test: 10,
    },
    count: 10,
    limit: 0,
  },
};

export const StockResponseMock: ApiResponse<number> = {
  status: 200,
  data: 10,
};

export const GetStockByProductTypeResponseMock: ApiResponse<GetStockByProductTypeResponse> =
  {
    status: 200,
    data: {
      variants: [
        {
          appearanceId: "1",
          sizeId: "M",
          stock: 42,
        },
        {
          appearanceId: "2",
          sizeId: "L",
          stock: 10,
        },
      ],
    },
  };
