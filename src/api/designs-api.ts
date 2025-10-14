import { DESIGNS_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js";
import { DesignUpload, DesignUploadResponse } from "../types/spod-types.js";

export class DesignsApi {
  constructor(private client: HttpClient) {}

  /**
   * Uploads a new design to Spreadconnect.
   *
   * This can either be done by directly uploading a file (binary data)
   * or by providing a public image URL, which Spreadconnect will fetch.
   *
   * Send a POST request to `/designs/upload` with `multipart/form-data`.
   *
   * @param props - The design upload details.
   * @param [props.file] - The binary file (image) to upload.
   * @param [props.url] - Optionally a public image URL to fetch.
   *
   * @returns A promise that resolves with a reusable `designId`.
   */
  upload(props: DesignUpload) {
    const formData = new FormData();

    if (props.file) {
      formData.append("file", props.file);
    }
    if (props.url) {
      formData.append("url", props.url);
    }

    return this.client.request<DesignUploadResponse>(
      "POST",
      `${DESIGNS_PATH}/upload`,
      formData,
    );
  }
}
