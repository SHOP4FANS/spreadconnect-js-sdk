import {
  CreateSubscriptionPropsMock,
  CreateSubscriptionResponseMock,
  DeleteSubscriptionResponseMock,
  GetSubscriptionsResponseMock,
  SimulateOrderCancelledResponseMock,
  SimulateOrderProcessedResponseMock,
  SimulateShipmentSentResponseMock,
} from "../../__mock__/subscription";
import { SubscriptionsApi } from "../../api/subscriptions-api";
import {
  ORDERS_PATH,
  SUBSCRIPTIONS_PATH,
} from "../../endpoints/spod-endpoints";
import { HttpClient } from "../../http/http-client";

jest.mock("../../http/http-client");

const MockedHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;

describe("Subscriptions API", () => {
  let httpClient: jest.Mocked<HttpClient>;
  let api: SubscriptionsApi;

  beforeEach(() => {
    MockedHttpClient.mockClear();

    httpClient = new MockedHttpClient(
      "",
      "",
    ) as unknown as jest.Mocked<HttpClient>;

    api = new SubscriptionsApi(httpClient);
  });

  test("Create subscription", async () => {
    httpClient.request.mockResolvedValueOnce(CreateSubscriptionResponseMock);

    const subscription = await api.create(CreateSubscriptionPropsMock);

    expect(subscription).toEqual(CreateSubscriptionResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      SUBSCRIPTIONS_PATH,
      CreateSubscriptionPropsMock,
    );
  });

  test("List subscriptions", async () => {
    httpClient.request.mockResolvedValueOnce(GetSubscriptionsResponseMock);

    const list = await api.list();

    expect(list).toEqual(GetSubscriptionsResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith("GET", SUBSCRIPTIONS_PATH);
  });

  test("Delete subscription", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(DeleteSubscriptionResponseMock);

    const res = await api.delete(id);

    expect(res).toEqual(DeleteSubscriptionResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "DELETE",
      `${SUBSCRIPTIONS_PATH}/${id}`,
    );
  });

  test("Simulate order cancelled", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(
      SimulateOrderCancelledResponseMock,
    );

    const res = await api.simulate_order_cancelled(id);

    expect(res).toEqual(SimulateOrderCancelledResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${ORDERS_PATH}/${id}/simulate/order-cancelled`,
    );
  });

  test("Simulate order processed", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(
      SimulateOrderProcessedResponseMock,
    );

    const res = await api.simulate_order_processed(id);

    expect(res).toEqual(SimulateOrderProcessedResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${ORDERS_PATH}/${id}/simulate/order-processed`,
    );
  });

  test("Simulate shipment sent", async () => {
    const id = "10";
    httpClient.request.mockResolvedValueOnce(SimulateShipmentSentResponseMock);

    const res = await api.simulate_shipment_sent(id);

    expect(res).toEqual(SimulateShipmentSentResponseMock);
    expect(httpClient.request).toHaveBeenCalledWith(
      "POST",
      `${ORDERS_PATH}/${id}/simulate/shipment-sent`,
    );
  });

  test("Throws on network error", async () => {
    httpClient.request.mockRejectedValueOnce(new Error("Network Error"));

    await expect(api.list()).rejects.toThrow("Network Error");
  });
});
