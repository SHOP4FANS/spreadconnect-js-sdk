import { ApiResponse, DesignUpload, DesignUploadResponse } from "../types";

export const DesignUploadPropsMock: DesignUpload = {
  url: "https://example.com/image.png",
};

export const DesignUploadResponseMock: ApiResponse<DesignUploadResponse> = {
  status: 200,
  data: {
    designId: "mock-design-id-123",
  },
};
