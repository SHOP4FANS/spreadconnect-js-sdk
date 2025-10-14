import { ApiResponse, GetSubscriptionsResponse, Subscription } from "../types";

export const CreateSubscriptionPropsMock: Subscription = {
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
        eventType: "Shipment.sent",
        url: "https://example.com/webhook",
      },
    ],
  };
