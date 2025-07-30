import { ApiResponse, ErrorResponse, GetShipmentsResponse, GetShippingTypesResponse } from "../types";

export const CreateOrderMock = {
    orderItems: [],
    shipping: {
        address: {
            company: "Test",
            firstName: "Bob",
            lastName: "Marley",
            street: "Chill Str. 420",
            streetAnnex: undefined,
            city: "Chill city",
            country: "Chill country",
            state: undefined,
            zipCode: "42020"
        },
        preferredType: undefined,
        customerPrice: {
            amount: 10
        }
    },
    phone: "",
    email: "",
    externalOrderReference: ""
};

export const GetOrderMock = {
    status: 0,
    data: {
        id: 10
    }
};

export const ErrorResponseMock: ApiResponse<ErrorResponse> = {
    status: 0,
    data: {
        orderId: 10,
        reason: "test",
    }
};

export const GetShippingTypesMock: ApiResponse<GetShipmentsResponse> = {
    status: 0,
    data: [
        {
            id: 1,
            orderId: 10
        }
    ]
}

export const GetAvailableShippingTypesMock: ApiResponse<GetShippingTypesResponse> = {
    status: 0,
    data: [
        {
            id: "1",
            company: "Chill corp",
            name: "Chill shipping",
            price: {
                amount: 10,
            }
        }
    ]
};