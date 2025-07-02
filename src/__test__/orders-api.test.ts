import { OrdersApi } from "../api/orders-api";
import { HttpClient } from "../http/http-client";
import { ORDERS_PATH } from "../endpoints/spod-endpoints";
import { CreateOrderMock, ErrorResponseMock, GetOrderMock, GetAvailableShippingTypesMock, GetShippingTypesMock } from "../__mock__/order";

jest.mock('../http/http-client');

const MockedHttpClient = HttpClient as jest.MockedClass<typeof HttpClient>;

describe('Orders API', () => {

    let httpClient: jest.Mocked<HttpClient>;
    let api: OrdersApi;

    beforeEach(() => {
        MockedHttpClient.mockClear();

        httpClient = new MockedHttpClient('', '') as unknown as jest.Mocked<HttpClient>;

        api = new OrdersApi(httpClient);
    });

    test('Get Single Order', async () => {
        const id = "10";

        httpClient.request.mockResolvedValueOnce(GetOrderMock);

        const list = await api.get(id);

        expect(list).toEqual(GetOrderMock);

        expect(httpClient.request).toHaveBeenCalledWith("GET", `${ORDERS_PATH}/${id}`);
    });

    test('Create Order', async () => {
        httpClient.request.mockResolvedValueOnce(GetOrderMock);

        const order = await api.create(CreateOrderMock);

        expect(order).toEqual(GetOrderMock);

        expect(httpClient.request).toHaveBeenCalledWith("POST", ORDERS_PATH, CreateOrderMock);
    });

    test('Update Order', async () => {
        const id = "10";

        httpClient.request.mockResolvedValueOnce(GetOrderMock);

        const order = await api.update(id, CreateOrderMock);

        expect(order).toEqual(GetOrderMock);

        expect(httpClient.request).toHaveBeenCalledWith("UPDATE", `${ORDERS_PATH}/${id}`, CreateOrderMock);
    });

    test('Config Order', async () => {
        const id = "10";

        const response = await api.confirm(id);

        expect(response).toEqual(undefined);

        expect(httpClient.request).toHaveBeenCalledWith("POST", `${ORDERS_PATH}/${id}/confirm`);
    });

    test('Config Order on Error', async () => {
        const id = "10";

        httpClient.request.mockResolvedValueOnce(ErrorResponseMock);

        const response = await api.confirm(id);

        expect(response).toEqual(ErrorResponseMock);

        expect(httpClient.request).toHaveBeenCalledWith("POST", `${ORDERS_PATH}/${id}/confirm`);
    });

    test('Cancel Order', async () => {
        const id = "10";

        const response = await api.cancel(id);

        expect(response).toEqual(undefined);

        expect(httpClient.request).toHaveBeenCalledWith("POST", `${ORDERS_PATH}/${id}/cancel`);
    });

    test('Cancel Order on Error', async () => {
        const id = "10";

        httpClient.request.mockResolvedValueOnce(ErrorResponseMock);

        const response = await api.cancel(id);

        expect(response).toEqual(ErrorResponseMock);

        expect(httpClient.request).toHaveBeenCalledWith("POST", `${ORDERS_PATH}/${id}/cancel`);
    });

    test('Set Shipping Type', async () => {
        const id = "10";

        const response = await api.set_shipping_type(id);

        expect(response).toEqual(undefined);

        expect(httpClient.request).toHaveBeenCalledWith("POST", `${ORDERS_PATH}/${id}/shippingType`);
    })

    test('Get Available Shipping Types', async () => {
        const id = "10";

        httpClient.request.mockResolvedValueOnce(GetAvailableShippingTypesMock);

        const response = await api.get_available_shipping_types(id);

        expect(response).toEqual(GetAvailableShippingTypesMock);

        expect(httpClient.request).toHaveBeenCalledWith("GET", `${ORDERS_PATH}/${id}/shippingTypes`);
    })

    test('Get Available Shipping Types', async () => {
        const id = "10";

        httpClient.request.mockResolvedValueOnce(GetShippingTypesMock);

        const response = await api.get_shipments(id);

        expect(response).toEqual(GetShippingTypesMock);

        expect(httpClient.request).toHaveBeenCalledWith("GET", `${ORDERS_PATH}/${id}/shipments`);
    })
})