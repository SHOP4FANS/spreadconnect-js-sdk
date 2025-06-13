import { ORDERS_PATH } from "../endpoints/spod-endpoints.js";
import { HttpClient } from "../http/http-client.js"
import { CreateOrder, ErrorResponse, GetOrder } from "../types/index.js";

export class OrdersApi {
    constructor(private client: HttpClient){}

    create(props: CreateOrder){
        return this.client.request<GetOrder>(
            "POST",
            ORDERS_PATH,
            props
        );
    }

    update(orderId: string, props: CreateOrder){
        return this.client.request<GetOrder>(
            "UPDATE",
            `${ORDERS_PATH}/${orderId}`,
            props
        );
    }

    get(orderId: string){
        return this.client.request<GetOrder>(
            "GET",
            `${ORDERS_PATH}/${orderId}`
        );
    }

    confirm(orderId: string){
        return this.client.request<ErrorResponse | void>(
            "POST",
            `${ORDERS_PATH}/${orderId}/confirm`
        )
    }

    cancel(orderId: string){
        return this.client.request<ErrorResponse | void>(
            "POST",
            `${ORDERS_PATH}/${orderId}/cancel`
        )
    }
}