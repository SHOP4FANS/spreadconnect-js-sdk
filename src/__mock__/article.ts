import {
  ArticleCreation,
  CreateArticleResponse,
  DeleteArticleParams,
  DeleteSingleArticleResponse,
  GetArticleParams,
  GetArticlesParams,
  GetArticlesResponse,
  GetSingleArticleResponse,
} from "../types/spod-types.js";

import { ApiResponse } from "../types/sdk-types.js";

const GetSingleArticleMock: GetSingleArticleResponse = {
  title: "Test article",
};

export const ArticleCreationMock: ArticleCreation = {
  title: "Test",
  description: "test",
  variants: [
    {
      productTypeId: 10,
      appearanceId: 1,
      sizeId: 1,
    },
  ],
  configurations: [
    {
      image: {
        url: "image",
      },
      view: "FRONT",
    },
  ],
};

export const GetSingleArticleResponseMock: ApiResponse<GetSingleArticleResponse> =
  {
    status: 200,
    data: GetSingleArticleMock,
  };

export const GetArticlesResponseMock: ApiResponse<GetArticlesResponse> = {
  status: 200,
  data: {
    items: [GetSingleArticleMock],
    count: 0,
    limit: 0,
  },
};
