import { ApiResponse, GetSubscriptionsResponse, Subscription } from "../types";

export const CreateSubscriptionPropsMock: Subscription = {
  id: "id",
  eventType: "Shipment.sent",
  url: "https://example.com/webhook",
};

export const CreateSubscriptionResponseMock: ApiResponse<void> = {
  status: 200,
};

export const DeleteSubscriptionResponseMock: ApiResponse<void> = {
  status: 200,
};

export const SimulateOrderCancelledResponseMock: ApiResponse<void> = {
  status: 200,
};

export const SimulateOrderProcessedResponseMock: ApiResponse<void> = {
  status: 200,
};

export const SimulateShipmentSentResponseMock: ApiResponse<void> = {
  status: 200,
};

export const GetSubscriptionsResponseMock: ApiResponse<GetSubscriptionsResponse> =
  {
    status: 200,
    data: [
      {
        id: "id",
        eventType: "Shipment.sent",
        url: "https://example.com/webhook",
      },
    ],
  };
