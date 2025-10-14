import {
  DesignUploadPropsMock,
  DesignUploadResponseMock,
} from "../../__mock__/design";
import { DesignsApi } from "../../api/designs-api";
import { DESIGNS_PATH } from "../../endpoints/spod-endpoints";
import { HttpClient } from "../../http/http-client";

jest.mock("../../http/http-client");
const MockedHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;

describe("Designs API", () => {
  let httpClient: jest.Mocked<HttpClient>;
  let api: DesignsApi;

  beforeEach(() => {
    MockedHttpClient.mockClear();
    httpClient = new MockedHttpClient(
      "",
      "",
    ) as unknown as jest.Mocked<HttpClient>;
    api = new DesignsApi(httpClient);
  });

  test("Upload design with url", async () => {
    httpClient.request.mockResolvedValueOnce(DesignUploadResponseMock);

    const result = await api.upload(DesignUploadPropsMock);

    expect(result).toEqual(DesignUploadResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${DESIGNS_PATH}/upload`,
      expect.any(FormData),
    );
  });

  test("Upload design with file", async () => {
    httpClient.request.mockResolvedValueOnce({
      status: 200,
      data: { designId: "file-upload-id" },
    });

    const file = new Blob(["hello"], { type: "text/plain" });
    const props = { file };

    const result = await api.upload(props);

    expect(result).toEqual({
      status: 200,
      data: { designId: "file-upload-id" },
    });
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${DESIGNS_PATH}/upload`,
      expect.any(FormData),
    );
  });

  test("Upload design with file and url", async () => {
    httpClient.request.mockResolvedValueOnce({
      status: 200,
      data: { designId: "both-id" },
    });

    const file = new Blob(["x"], { type: "text/plain" });
    const props = { file, url: "https://example.com/test.png" };

    const result = await api.upload(props);

    expect(result).toEqual({ status: 200, data: { designId: "both-id" } });
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${DESIGNS_PATH}/upload`,
      expect.any(FormData),
    );
  });

  test("Throws on network error", async () => {
    httpClient.request.mockRejectedValueOnce(new Error("Network Error"));

    await expect(api.upload(DesignUploadPropsMock)).rejects.toThrow(
      "Network Error",
    );
  });
});
